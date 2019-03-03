"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;

module.exports = class MiioAdapterDeviceTypePlug extends MiioAdapterDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "plug";
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
};