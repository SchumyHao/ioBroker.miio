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

module.exports = class MiioAdapterDeviceYeelinkLightMono extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yeelink.light.mono";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeVersionDevice";
    }


    /**
     * @returns {Record<string, ioBroker.StateCommon>}
     */
    get states() {
        return objectExtend(super.states, {
            colorTemperature: {
                delete: true
            },
            RGB: {
                delete: true
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};