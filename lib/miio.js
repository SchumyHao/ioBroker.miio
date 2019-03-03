"use strict";

const EventEmitter = require("events").EventEmitter;
const miio = require("miio");

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

            miio.device({
                address: dev.ip,
                token: dev.token
            }).then(dev => {
                this.registerDevice(dev, false);
            }).catch((e) => {
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
        if (!this.deviceRegistered[id] || !this.deviceRegistered[id].device) {
            this.emit("warning", id + " set unregistered device state");
            return;
        }
        const miioDev = this.deviceRegistered[id].device;
        const adapterState = miioDev.getDeviceStates()[state];
        const miioCommand = miioDev.getSupportCommands()[state];
        if (!adapterState) {
            this.emit("warning", id + " set unsupported device state " + state);
            return;
        }
        const ret = miioDev.invokeCommand(miioCommand, val);
        return;
    }

    findBestMatchDevice(vendor, type, version) {
        let DeviceClass = null;
        const versionN = version.replace(/\d+$/, "");
        try {
            DeviceClass = require(`./Devices/VendorTypeVersion/${vendor}.${type}.${version}`);
        } catch (e) {
            try {
                DeviceClass = require(`./Devices/VendorTypeVersion/${vendor}.${type}.${versionN}`);
            } catch (e) {
                try {
                    DeviceClass = require(`./Devices/VendorType/${vendor}.${type}`);
                } catch (e) {
                    try {
                        DeviceClass = require(`./Devices/Type/${type}`);
                    } catch (e) {
                        return null;
                    }
                }
            }
        }
        return new DeviceClass;
    }

    registerDevice(dev, isAutoDiscovered) {
        const mgmt = dev.management;
        const miioID = dev.id.replace(/^miio:/, "");
        const miioDeviceVendor = mgmt.model.split(".")[0];
        const miioDeviceType = mgmt.model.split(".")[1];
        const miioDeviceVersion = mgmt.model.split(".")[2];
        const device = this.findBestMatchDevice(miioDeviceVendor,
            miioDeviceType, miioDeviceVersion);

        if (!device) {
            this.emit("warning", mgmt.model + " is not supported for now.");
            return;
        }
        device.on("attrUpdate", (miioId, state, val) => {
            //TODO: remove this log
            this.emit("warning", `State Change ${miioId} ${state} ${JSON.stringify(val)}`);
            this.emit("data", miioId, state, val);
        });
        device.on("error", (e) => {
            this.emit("error", e);
        });
        device.on("warning", (e) => {
            this.emit("warning", e);
        });
        device.listen(device.getSupportProperties());

        this.deviceRegistered[miioID] = {
            miioInfo: {
                id: miioID,
                vendor: miioDeviceVendor,
                type: miioDeviceType,
                version: miioDeviceVersion,
                model: mgmt.model,
            },
            configData: {
                name: "",
                ip: mgmt.address,
                token: mgmt.token
            },
            autoDiscovered: isAutoDiscovered,
            device: device
        };

        this.emit("device", this.deviceRegistered[miioID]);
        this.emit("data", miioID, "connected", true);
    }
};