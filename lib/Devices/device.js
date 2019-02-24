"use strict";

const EventEmitter = require("events").EventEmitter;
const RGBToHex = require("../tools").RGBToHex;

module.exports = class MiioDevice extends EventEmitter {
    constructor(dev) {
        super();

        this.miioDev = dev;
        this.miioID = dev.id.replace(/^miio:/, "");
    }

    attributeUpdate(state, val) {
        this.emit("attrUpdate", this.miioID, state, val);
    }

    listen() {
        const device = this.miioDev;

        if (device.matches("type:light")) {
            if (device.matches("cap:power")) {
                device.on("powerChanged", isOn => {
                    this.attributeUpdate("power", isOn);
                });
            }

            if (device.matches("cap:brightness")) {
                device.on("brightnessChanged", bri => {
                    this.attributeUpdate("brightness", bri);
                });
            }

            if (device.matches("cap:colorable")) {
                device.on("colorChanged", color => {
                    let colorVal = "";
                    if (color.model === "rgb") {
                        colorVal = RGBToHex(color.values);
                    }
                    this.attributeUpdate("color", colorVal);
                });
            }
        } else if (device.matches("type:air-purifier")) {
            if (device.matches("cap:power")) {
                device.on("powerChanged", isOn => {
                    this.attributeUpdate("power", isOn);
                });
            }
            if (device.matches("cap:mode")) {
                device.on("modeChanged", mode => {
                    this.attributeUpdate("mode", mode);
                });
            }
            if (device.matches("type:sensor")) {
                if (device.matches("cap:temperature")) {
                    device.on("temperature", temp => {
                        this.attributeUpdate("temperature", temp);
                    });
                }
                if (device.matches("cap:relative-humidity")) {
                    device.on("relativeHumidityChanged", rh => {
                        this.attributeUpdate("humidity", rh);
                    });
                }
                if (device.matches("cap:pm2.5")) {
                    device.on("pm2.5Changed", pm2_5 => {
                        this.attributeUpdate("pm2.5", pm2_5);
                    });
                }
            }
        } else if (device.matches("type:humidifier")) {
            if (device.matches("cap:power")) {
                device.on("powerChanged", isOn => {
                    this.attributeUpdate("power", isOn);
                });
            }
            if (device.matches("cap:mode")) {
                device.on("modeChanged", mode => {
                    this.attributeUpdate("mode", mode);
                });
            }
            if (device.matches("type:sensor")) {
                if (device.matches("cap:temperature")) {
                    device.on("temperature", temp => {
                        this.attributeUpdate("temperature", temp);
                    });
                }
                if (device.matches("cap:relative-humidity")) {
                    device.on("relativeHumidityChanged", rh => {
                        this.attributeUpdate("humidity", rh);
                    });
                }
            }
            if (device.matches("cap:target-humidity")) {
                device.on("targetHumidityChanged", th => {
                    this.attributeUpdate("targetHumidity", th);
                });
            }
        } else if (device.matches("type:power-strip")) {
            if (device.matches("cap:power")) {
                device.on("powerChanged", isOn => {
                    this.attributeUpdate("power", isOn);
                });
            }
            if (device.matches("cap:mode")) {
                device.on("modeChanged", mode => {
                    this.attributeUpdate("mode", mode);
                });
            }
        }
    }
};
