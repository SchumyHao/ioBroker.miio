"use strict";

let Parent = null;
const objectExtend = require("../../tools").objectExtend;
const Pow = require("../../Properties/pow");
const Bri = require("../../Properties/bri");
const SetRgb = require("../../Commands/setRgb");
const Rgb = require("../../Properties/rgb");

try {
    Parent = require("../VendorType/philips.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDevicePhilipsLightMoonlight extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "philips.light.moonlight";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeVersionDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
            RGB: {
                command: new SetRgb(),
                property: new Rgb(),
            },
            power: {
                property: new Pow(),
            },
            brightness: {
                property: new Bri(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};