"use strict";

const miioDevice = require("./device");

module.exports = class PowerPlug extends miioDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    power(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:power-strip") &&
            device.matches("cap:power") &&
            device.matches("cap:switchable-power")) {
            device.setPower(!!newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set power failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};
