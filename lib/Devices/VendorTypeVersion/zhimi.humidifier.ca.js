"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const Speed = require("../../Properties/speed");
const Depth = require("../../Properties/depth");
const SetDry = require("../../Commands/setDry");
const Dry = require("../../Properties/dry");

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
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
            dryMode: {
                command: new SetDry(),
                property: new Dry(),
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            fanSpeed: {
                property: new Speed(),
            },
            waterRemain: {
                property: new Depth(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};