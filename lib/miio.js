"use strict";

const EventEmitter = require("events").EventEmitter;
const miio = require("miio");

module.exports = class Controller extends EventEmitter {

    /**
     * 
     * @param {AdapterMiio.ControllerOption} options 
     */
    constructor(options) {
        super();
        options = options || {};
        this.interval = options.interval || 5000;
        this.devicesDefined = options.devicesDefined || [];
        this.autoDiscover = options.autoDiscover || false;
        this.autoDiscoverTimeout = options.autoDiscoverTimeout || 30;
        /** @type {Record<string, AdapterMiio.ControllerDevice>} */
        this.deviceRegistered = {};
    }

    /**
     * 
     */
    listen() {
        // Connect to user defined device
        for (let i = 0; i < this.devicesDefined.length; i++) {
            const dev = this.devicesDefined[i];

            miio.device({
                address: dev.ip,
                token: dev.token
            }).then(/** @param {miio.Device} dev */ dev => {
                this.registerDevice(dev, false);
            }).catch(/** @param {string} e */ e => {
                this.emit("warning", dev.ip + " can not be connected." + e);
            });
        }

        // Discover devices
        if (this.autoDiscover) {
            const browser = miio.browse({
                cacheTime: this.autoDiscoverTimeout
            });

            browser.on("available", /** @param {miio.RegisterInfo} reg */ reg => {
                if (!reg.token) {
                    this.emit("info", reg.id + " token is hide");
                    return;
                }
                if (!reg.id) {
                    this.emit("info", "Cannot add device without Device ID");
                    return;
                }
                miio.device(reg)
                    .then(/** @param {miio.Device} dev */ dev => {
                        this.registerDevice(dev, true);
                    })
                    .catch(/** @param {string} e */ e => {
                        this.emit("warning", reg.id + " can not be connected." + e);
                    });
            });
        }
        return;
    }

    stop() {
        for (const id in this.deviceRegistered) {
            this.deviceRegistered[id].device.miioDevice.destroy();
        }
    }

    /**
     * 
     * @param {string} id 
     * @param {string} state 
     * @param {any} val 
     */
    async setState(id, state, val) {
        if (!this.deviceRegistered[id] || !this.deviceRegistered[id].device) {
            this.emit("warning", id + " set unregistered device state");
            return;
        }
        const miioDev = this.deviceRegistered[id].device;
        const adapterState = miioDev.states[state];
        const miioCommand = miioDev.commands[state];
        if (!adapterState) {
            this.emit("warning", id + " set unsupported device state " + state);
            return;
        }
        const ret = await miioDev.invokeCommand(miioCommand, val);
        if (ret !== false) {
            this.emit("data", id, state, val);
        }
    }

    /**
     * 
     * @param {miio.Device} dev 
     * @param {string} vendor 
     * @param {string} type 
     * @param {string} version 
     */
    findBestMatchDevice(dev, vendor, type, version) {
        let DeviceClass = null;
        const versionN = version.replace(/\d+$/, "");
        try {
            DeviceClass = require(`./Devices/VendorTypeVersion/${vendor}.${type}.${version}`);
            this.emit("info", `new ${vendor}.${type}.${version} device`);
        } catch (e) {
            this.emit("warning", e);
            try {
                DeviceClass = require(`./Devices/VendorTypeVersion/${vendor}.${type}.${versionN}`);
                this.emit("info", `new ${vendor}.${type}.${versionN} device`);
            } catch (e) {
                this.emit("warning", e);
                try {
                    DeviceClass = require(`./Devices/VendorType/${vendor}.${type}`);
                    this.emit("info", `new ${vendor}.${type} device`);
                } catch (e) {
                    this.emit("warning", e);
                    try {
                        DeviceClass = require(`./Devices/Type/${type}`);
                        this.emit("info", `new ${type} device`);
                    } catch (e) {
                        this.emit("warning", e);
                        return null;
                    }
                }
            }
        }
        return new DeviceClass(dev);
    }

    /**
     * 
     * @param {string} ip 
     * @returns {AdapterMiio.ControllerOptionDeviceDefine | null}
     */
    findDeviceDefineInfo(ip) {
        for (let i = 0; i < this.devicesDefined.length; i++) {
            const dev = this.devicesDefined[i];
            if (dev.ip == ip) {
                return dev;
            }
        }
        return null;
    }


    /**
     * 
     * @param {miio.Device} dev 
     */
    unregisterDevice(dev) {
        const miioID = dev.id.replace(/^miio:/, "");
        if (!miioID) {
            this.emit("warning", "Cannot remove device without Device ID");
            return;
        }
        if (!this.deviceRegistered[miioID]) {
            this.emit("warning", `${miioID} already removed.`);
            return;
        }

        this.emit("data", miioID, "connected", false);
        this.emit("device", this.deviceRegistered[miioID], "delete");
        this.emit("info", `${miioID} becomes unavailable.`);
        delete this.deviceRegistered[miioID];
    }

    /**
     * 
     * @param {miio.Device} dev 
     * @param {boolean} isAutoDiscovered 
     */
    registerDevice(dev, isAutoDiscovered) {
        const miioID = dev.id.replace(/^miio:/, "");
        if (this.deviceRegistered[miioID]) {
            this.emit("info", miioID + " Already registed.");
            return;
        }
        dev.on("thing:destroyed", () => {
            // Device becomes offline.
            this.unregisterDevice(dev);
        });
        const mgmt = dev.management;
        const miioDeviceVendor = mgmt.model.split(".")[0];
        const miioDeviceType = mgmt.model.split(".")[1];
        const miioDeviceVersion = mgmt.model.split(".")[2];
        const device = this.findBestMatchDevice(dev, miioDeviceVendor,
            miioDeviceType, miioDeviceVersion);

        if (!device) {
            this.emit("warning", mgmt.model + " is not supported for now.");
            return;
        }
        device.on("attrUpdate",
            /**
             * @param {string} miioId
             * @param {string} state
             * @param {any} val
             */
            (miioId, state, val) => {
                //TODO: remove this log
                this.emit("warning", `State Change ${miioId} ${state} ${JSON.stringify(val)}`);
                this.emit("data", miioId, state, val);
            });
        device.on("error", /** @param {string} e */ e => {
            this.emit("error", e);
        });
        device.on("warning", /** @param {string} e */ e => {
            this.emit("warning", e);
        });
        device.listen(device.properties);

        this.deviceRegistered[miioID] = {
            miioInfo: {
                id: miioID,
                vendor: miioDeviceVendor,
                type: miioDeviceType,
                version: miioDeviceVersion,
                model: mgmt.model,
            },
            configData: this.findDeviceDefineInfo(mgmt.address) || {
                name: mgmt.model,
                ip: mgmt.address,
                token: mgmt.token
            },
            autoDiscovered: isAutoDiscovered,
            device: device
        };
        this.deviceRegistered[miioID].configData.polling = this.deviceRegistered[miioID].configData.polling || device.polling;
        let pollingMs = this.deviceRegistered[miioID].configData.polling;
        if (pollingMs !== undefined) {
            if (pollingMs < 3000) {
                pollingMs = 3000;
                this.deviceRegistered[miioID].configData.polling = 3000;
            }
            dev.updatePollDuration(pollingMs);
        }

        this.emit("device", this.deviceRegistered[miioID], "add");
        this.emit("data", miioID, "connected", true);
    }
};