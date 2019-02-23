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

        if (device.matches("cap:power") ||
            device.matches("cap:power")) {
            device.on("powerChanged", isOn => {
                this.attributeUpdate("power", isOn);
            });
        }

        if (device.matches("cap:brightness") ||
            device.matches("cap:dimmable")) {
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
    }
};
