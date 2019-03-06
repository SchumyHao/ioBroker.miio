"use strict";

const objectExtend = require("../../tools").objectExtend;
const Light = require("../Type/light");
const SetCct = require("../../Commands/setCct");
const Cct = require("../../Properties/cct");

module.exports = class MiioAdapterDevicePhilipsLight extends Light {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "philips.light";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
            colorTemperature: {
                command: new SetCct(),
                property: new Cct(),
            },
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};