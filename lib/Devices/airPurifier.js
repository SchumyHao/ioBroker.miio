"use strict";

const miioDevice = require("./device");

module.exports = class AirPurifier extends miioDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    power(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier") &&
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

    mode(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier") &&
            device.matches("cap:mode") &&
            device.matches("cap:switchable-mode")) {
            device.setMode(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set mode failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    buzzer(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier") &&
            device.matches("cap:miio:buzzer")) {
            device.buzzer(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set buzzer failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    led(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier") &&
            device.matches("cap:miio:switchable-led")) {
            device.led(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set led failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    ledBrightness(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier") &&
            device.matches("cap:miio:led-brightness")) {
            device.ledBrightness(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set ledBrightness failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    favoriteLevel(newState, callback) {
        const device = this.miioDev;
        if(device.matches("type:air-purifier")) {
            device.favoriteLevel(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set favoriteLevel failed."+e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};
