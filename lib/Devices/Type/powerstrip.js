"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;

module.exports = class MiioAdapterDeviceTypePowerStrip extends MiioAdapterDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "powerstrip";
    }

    getDeviceType() {
        return "TypeDevice";
    }

    getDeviceStates() {
        return objectExtend(super.getDeviceStates(), {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            mode: {
                name: "Work Mode",
                write: true,
                read: true,
                type: "number",
                states: {
                    "1": "green",
                    "2": "normal"
                }
            }
        });
    }

    power(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:power-strip") &&
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

    mode(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:power-strip") &&
            device.matches("cap:mode") &&
            device.matches("cap:switchable-mode")) {
            device.setMode(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set mode failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};