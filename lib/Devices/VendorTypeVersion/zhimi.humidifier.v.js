"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const ButtonPressed = require("../../Properties/buttonPressed");

try {
    // @ts-ignore VendorType device may not exist, just try Type device
    Parent = require("../VendorType/zhimi.humidifier");
} catch (e) {
    try {
        Parent = require("../Type/humidifier");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceZhimiHumidifierV extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zhimi.humidifier.v";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeVersionDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            LastPressedButton: {
                property: new ButtonPressed(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};