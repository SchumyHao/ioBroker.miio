"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;

module.exports = class MiioAdapterDeviceTypeAirPurifier extends MiioAdapterDevice {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "airpurifier";
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
                    "1": "idle",
                    "2": "auto",
                    "3": "silent",
                    "4": "favorite"
                }
            },
            temperature: {
                name: "Environment Temperature",
                role: "sensor",
                write: false,
                read: true,
                unit: "°C",
                type: "number"
            },
            humidity: {
                name: "Environment Relative Humidity",
                role: "sensor",
                write: false,
                read: true,
                unit: "%",
                type: "number"
            },
            "pm2.5": {
                name: "Environment PM2.5",
                role: "sensor",
                write: false,
                read: true,
                type: "number"
            },
            buzzer: {
                name: "Turn on Buzzer",
                role: "button",
                write: true,
                read: false,
                type: "boolean"
            },
            led: {
                name: "Turn on Led",
                role: "button",
                write: true,
                read: false,
                type: "boolean"
            },
            ledBrightness: {
                name: "Set Led Brightness",
                write: true,
                read: false,
                type: "number",
                states: {
                    "1": "bright",
                    "2": "dim",
                    "3": "off"
                }
            },
            favoriteLevel: {
                name: "Set Favorite Speed",
                role: "level",
                write: true,
                read: false,
                max: 16,
                type: "number"
            }
        });
    }

    power(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:air-purifier") &&
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
        if (device.matches("type:air-purifier") &&
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

    buzzer(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:air-purifier") &&
            device.matches("cap:miio:buzzer")) {
            device.buzzer(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set buzzer failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    led(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:air-purifier") &&
            device.matches("cap:miio:switchable-led")) {
            device.led(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set led failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    ledBrightness(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:air-purifier") &&
            device.matches("cap:miio:led-brightness")) {
            device.ledBrightness(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set ledBrightness failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }

    favoriteLevel(newState, callback) {
        const device = this.getMiioDevice();
        if (device.matches("type:air-purifier")) {
            device.favoriteLevel(newState)
                .then(() => {
                    callback && callback(true);
                })
                .catch(e => {
                    this.emit("error", "Set favoriteLevel failed." + e);
                    callback && callback(false);
                });
        } else {
            this.emit("error", "Type or capability check failed.");
            callback && callback(false);
        }
    }
};