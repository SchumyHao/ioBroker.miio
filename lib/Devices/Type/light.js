"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;

module.exports = class MiioAdapterDeviceTypeLight extends MiioAdapterDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "light";
    }

    getDeviceType() {
        return "TypeDevice";
    }

    getDeviceState() {
        return objectExtend(super.getDeviceState(), {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            color: {
                name: "Color value",
                role: "level.rgb",
                write: true,
                read: true,
                type: "string"
            }
        });
    }

    power(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:light") &&
            device.matches("cap:power") &&
            device.matches("cap:switchable-power")) {
            device.setPower(!!newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set power failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    brightness(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:light") &&
            device.matches("cap:brightness") &&
            device.matches("cap:dimmable")) {
            device.setBrightness(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set brightness failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
    color(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:light") &&
            device.matches("cap:colorable")) {
            device.color(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set color failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};