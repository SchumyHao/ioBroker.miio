"use strict";

const miioDevice = require("../device");

module.exports = class Light extends miioDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    power(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:light") &&
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

    brightness(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:light") &&
            device.matches("cap:brightness") &&
            device.matches("cap:dimmable")) {
            device.setBrightness(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set brightness failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
    color(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:light") &&
            device.matches("cap:colorable")) {
            device.color(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set color failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};
