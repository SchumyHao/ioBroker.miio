"use strict";

/*
 * Created with @iobroker/create-adapter v1.9.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
const Controller = require("./lib/miio");

// Load your modules here, e.g.:
// const fs = require("fs");

/**
 * @class
 */
class Miio extends utils.Adapter {

    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    constructor(options) {
        super({
            ...options,
            name: "miio",
        });
        this.on("ready", this.onReady.bind(this));
        this.on("objectChange", this.onObjectChange.bind(this));
        this.on("stateChange", this.onStateChange.bind(this));
        this.on("message", this.onMessage.bind(this));
        this.on("unload", this.onUnload.bind(this));

        /**
         * Save latest miio adapter objects.
         * @type {AdapterMiio.Objects}
         */
        this.miioObjects = {};
        /**
         * Save objects that updated before created.
         * @type {AdapterMiio.States}
         */
        this.delayed = {};
        /**
         * Save objects that needed to register.
         * @type {ioBroker.BaseObject[]}
         */
        this.tasks = [];
        /**
         * miio Controller
         * @type {AdapterMiio.Controller | null | undefined}
         */
        this.miioController = null;
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here

        this.miioAdapterInit();
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        this.miioAdapterStop();
        callback && callback();
    }

    /**
     * Is called if a subscribed object changes
     * @param {string} id
     * @param {ioBroker.Object | null | undefined} obj
     */
    onObjectChange(id, obj) {
        if (obj) {
            // The object was changed
            this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
        } else {
            // The object was deleted
            this.log.info(`object ${id} deleted`);
        }
    }

    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} val
     */
    onStateChange(id, val) {
        if (!id || !val || val.ack) {
            return;
        }
        if (!this.miioObjects[id]) {
            this.log.warn(`Unknown ID: ${id}`);
            return;
        }
        if (this.miioController) {
            const pos = id.lastIndexOf(".");
            const channelId = id.substring(0, pos);
            const state = id.substring(pos + 1);

            if (this.miioObjects[channelId] && this.miioObjects[channelId].native) {
                //TODO: remove this log
                val = val.val;
                this.log.info(`onStateChange. state=${state} val=${JSON.stringify(val)}`);
                this.miioController.setState(this.miioObjects[channelId].native.id, state, val);
            }
        }
    }

    /**
     * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
     * Using this method requires "common.message" property to be set to true in io-package.json
     * @param {ioBroker.Message} obj
     */
    onMessage(obj) {
        if (typeof obj === "object" && obj.message) {
            if (obj.command === "send") {
                // e.g. send email or pushover or whatever
                this.log.info("send command");

                // Send response in callback if required
                if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
            }
        }
    }

    /**
     * Is called to set adapter connection status
     * @param {boolean} conn
     */
    setConnected(conn) {
        this.setState("info.connection", conn, true);
    }

    /**
     */
    getObjectIDPrefix() {
        return this.namespace + ".devices";
    }

    /**
     * @param {string} id
     */
    generateChannelID(id) {
        return this.getObjectIDPrefix() + "." + id;
    }

    /**
     * Is called to find exist miio objects
     * @param {() => void} callback
     */
    readObjects(callback) {
        this.getForeignObjects(this.getObjectIDPrefix() + ".*", (err, list) => {
            // Read miio objects in database. This maybe set in prevrous running status.
            // No need set namespace
            this.subscribeStates("devices.*");
            this.miioObjects = list;
            callback && callback();
        });
    }

    /**
     * @param {string} id
     * @param {string} state
     * @param {any} val
     */
    miioAdapterUpdateState(id, state, val) {
        if (this.miioObjects[id] ||
            this.miioObjects[id + "." + state]) {
            //TODO: what if only id exist?
            this.setForeignState(id + "." + state, val, true);
        } else {
            this.delayed[id + "." + state] = val;
        }
    }

    /**
     * @param {AdapterMiio.Miio} instant
     */
    miioAdapterSyncObjects(instant) {
        // This obj is obj with new value
        const obj = instant.tasks.shift();
        if (obj === undefined) {
            return;
        }

        instant.getForeignObject(obj._id,
            (err, oObj) => {
                if (!oObj) {
                    //No obj._id data stored in database. Just set this obj
                    instant.miioObjects[obj._id] = obj;
                    instant.setForeignObject(obj._id, obj, () => {
                        if (instant.delayed[obj._id] !== undefined) {
                            instant.setForeignState(obj._id, instant.delayed[obj._id], true, () => {
                                delete instant.delayed[obj._id];
                                setImmediate(instant.miioAdapterSyncObjects, instant);
                            });
                        } else {
                            setImmediate(instant.miioAdapterSyncObjects, instant);
                        }
                    });
                } else {
                    //Database contains obj._id object. Check whether update is needed.
                    let changed = false;
                    for (const a in obj.common) {
                        if (obj.common.hasOwnProperty(a) &&
                            a !== "name" &&
                            a !== "icon" &&
                            oObj.common[a] !== obj.common[a]) {
                            // object value need update.
                            changed = true;
                            oObj.common[a] = obj.common[a];
                        }
                    }
                    if (JSON.stringify(obj.native) !== JSON.stringify(oObj.native)) {
                        changed = true;
                        oObj.native = obj.native;
                    }
                    // The newest data is saved in oObj.

                    instant.miioObjects[obj._id] = oObj;
                    if (changed) {
                        instant.setForeignObject(oObj._id, oObj, () => {
                            if (instant.delayed[oObj._id] !== undefined) {
                                instant.setForeignState(oObj._id, instant.delayed[oObj._id], true, () => {
                                    delete instant.delayed[oObj._id];
                                    setImmediate(instant.miioAdapterSyncObjects, instant);
                                });
                            } else {
                                setImmediate(instant.miioAdapterSyncObjects, instant);
                            }
                        });
                    } else {
                        if (instant.delayed[oObj._id] !== undefined) {
                            instant.setForeignState(oObj._id, instant.delayed[oObj._id], true, () => {
                                delete instant.delayed[oObj._id];
                                setImmediate(instant.miioAdapterSyncObjects, instant);
                            });
                        } else {
                            setImmediate(instant.miioAdapterSyncObjects, instant);
                        }
                    }
                }
            });
    }

    /**
     * @this {AdapterMiio.Miio}
     * @param {AdapterMiio.ControllerDevice} dev
     */
    miioAdapterCreateDevice(dev) {
        const id = this.generateChannelID(dev.miioInfo.id);
        const isInitTasks = !this.tasks.length;
        const states =  dev.device.__proto__.states;

        for (const state in states) {
            if (!states.hasOwnProperty(state)) continue;
            this.log.info(`Create state object ${id}.${state}`);
            this.tasks.push({
                _id: `${id}.${state}`,
                common: states[state],
                type: "state",
                native: {}
            });
        }

        this.tasks.push({
            _id: id,
            common: {
                name: dev.configData.name || dev.miioInfo.model,
                icon: `/icons/${dev.miioInfo.model}.png`
            },
            type: "channel",
            native: {
                id: dev.miioInfo.id,
                model: dev.miioInfo.model
            }
        });

        isInitTasks && this.miioAdapterSyncObjects(this);
    }

    /**
     */
    miioAdapterStop() {
        if (this.miioController) {
            try {
                this.miioController.stop();
                this.miioController = null;
            } catch (e) {
                this.log.error(`adapter stop failed.` + e);
            }
        }
    }

    /**
     */
    miioAdapterInit() {
        this.readObjects(() => {
            this.setConnected(false);
            if (!this.config ||
                !this.config.devices ||
                ("[]" === JSON.stringify(this.config.devices))) {
                if (!this.config.autoDiscover) {
                    this.log.error("No device defined and discover is also disabled.");
                }
            }
            this.miioController = new Controller({
                devicesDefined: this.config.devices,
                autoDiscover: this.config.autoDiscover || true,
                autoDiscoverTimeout: parseInt(this.config.autoDiscoverTimeout || "30") //
            });

            this.miioController.on("info", /** @param {string} msg */ msg => this.log.info(msg));
            this.miioController.on("warning", /** @param {string} msg */ msg => this.log.warn(msg));
            this.miioController.on("error", /** @param {string} msg */ msg => {
                this.log.error(msg);
                this.miioAdapterStop();
            });
            // New device need add to adapter.
            this.miioController.on("device", /** @param {AdapterMiio.ControllerDevice} dev */ dev => {
                if (!this.miioObjects[this.generateChannelID(dev.miioInfo.id)]) {
                    this.log.info(`New device: ${dev.miioInfo.model}. ID ${dev.miioInfo.id}`);
                    this.miioAdapterCreateDevice(dev);
                } else {
                    this.log.info("Known device: " + dev.miioInfo.model + dev.miioInfo.id);
                }
            });
            this.miioController.on("data",
                /**
                 * @param {string} id
                 * @param {string} state
                 * @param {any} val
                 */
                (id, state, val) => {
                    this.miioAdapterUpdateState(this.generateChannelID(id), state, val);
                }
            );
            this.miioController.listen();
            this.setConnected(true);
        });
    }
}

if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new Miio(options);
} else {
    // otherwise start the instance directly
    new Miio();
}