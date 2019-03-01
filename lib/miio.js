"use strict";

const EventEmitter    = require("events").EventEmitter;
const devices         = require("./devices");
const miio            = require("miio");
const objectExtend    = require("./tools").objectExtend;


module.exports = class Controller extends EventEmitter {
    constructor(options) {
        super();
        options = options || {};
        this.interval = options.interval || 5000;
        this.devicesDefined = options.devicesDefined || [];
        this.autoDiscover = options.autoDiscover || false;
        this.autoDiscoverTimeout = options.autoDiscoverTimeout || 30;
        this.deviceRegistered = {};
    }

    listen() {
        // Connect to user defined device
        for (let i = 0; i < this.devicesDefined.length; i++) {
            const dev = this.devicesDefined[i];

            miio.device({address: dev.ip, token: dev.token})
                .then(dev => {
                    this.registerDevice(dev, false);
                })
                .catch((e) => {
                    this.emit("warning", dev.ip + " can not be connected." + e);
                });
        }

        // Discover devices
        if (this.autoDiscover) {
            const browser = miio.browse({
                cacheTime: this.autoDiscoverTimeout
            });

            browser.on("available", reg => {
                if (!reg.token) {
                    this.emit("info", reg.id + " token is hide");
                    return;
                }
                if (this.deviceRegistered[reg.id]) {
                    this.emit("info", reg.id + " Already registed.");
                }
                miio.device(reg)
                    .then(dev => {
                        this.registerDevice(dev, true);
                    })
                    .catch(() => {
                        this.emit("warning", reg.id + " can not be connected.");
                    });
            });

            browser.on("unavailable", reg => {
                // Device becomes offline.
                const dev = this.deviceRegistered[reg.id];
                if (!dev) return;

                dev.destroy();
                delete this.deviceRegistered[reg.id];
                this.emit("warning", reg.id + "becomes unavailable.");
                //TODO: update connection state.
            });
        }
        return;
    }
    stop(cb) {
        cb && cb();
    }
    setState(id, state, val) {
        if (!this.deviceRegistered[id]) {
            this.emit("warning", id + " set unregistered device state");
            return;
        }
        if (!this.deviceRegistered[id].adapterInfo.states[state]) {
            this.emit("warning", id + " set unsupport device state " + state);
            return;
        }
        const miioDev = this.deviceRegistered[id].miioDevice;
        miioDev[state](val.val);
        return;
    }
    registerDevice(dev, isAutoDiscovered) {
        const mgmt = dev.management;
        const miioID = dev.id.replace(/^miio:/, "");
        const miioDeviceVendor = mgmt.model.split(".")[0];
        const miioDeviceType = mgmt.model.split(".")[1];
        const miioDeviceVersion = mgmt.model.split(".")[2];

        if (!devices[mgmt.model] &&
            !devices[miioDeviceVendor + "." + miioDeviceType] &&
            !devices[miioDeviceType]) {
            this.emit("warning", mgmt.model + " is not supported for now.");
            return;
        }

        let device = JSON.parse(JSON.stringify(devices["device"]));

        if (devices[miioDeviceType]) {
            device = objectExtend(device, devices[miioDeviceType]);
        }
        if (devices[miioDeviceVendor + "." + miioDeviceType]) {
            device = objectExtend(device, devices[miioDeviceVendor + "." + miioDeviceType]);
        }
        if (devices[mgmt.model]) {
            device = objectExtend(device, mgmt.model);
        }

        this.deviceRegistered[miioID] = {
            miioInfo: {
                id: miioID,
                vendor: miioDeviceVendor,
                type: miioDeviceType,
                version: miioDeviceVersion,
                model: mgmt.model,
            },
            adapterInfo: device,
            configData: {
                name: "",
                ip: mgmt.address,
                token: mgmt.token
            },
            autoDiscovered: isAutoDiscovered,
            miioDevice: new device.miioDevice(dev)
        };
        this.deviceRegistered[miioID].miioDevice.on("attrUpdate", (miioId, state, val) => {
            //TODO: remove this log
            this.emit("warning", `State Change ${miioId} ${state} ${JSON.stringify(val)}`);
            this.emit("data", miioId, state, val);
        });
        this.deviceRegistered[miioID].miioDevice.on("error", (e) => {
            this.emit("error", e);
        });
        this.deviceRegistered[miioID].miioDevice.on("warning", (e) => {
            this.emit("warning", e);
        });
        this.deviceRegistered[miioID].miioDevice.listen();

        this.emit("device", this.deviceRegistered[miioID]);
        this.emit("data", miioID, "connected", true);
    }
};
