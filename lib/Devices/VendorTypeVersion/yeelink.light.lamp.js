"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;

try {
    Parent = require("../VendorType/yeelink.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceYeelinkLightLamp extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yeelink.light.lamp";
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
                delete: true
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};