"use strict";

const objectExtend = require("../../tools").objectExtend;
const Light = require("../Type/light");
const SetCtAbx = require("../../Commands/setCtAbx");
const Ct = require("../../Properties/ct");
const SetRgb = require("../../Commands/setRgb");
const Rgb = require("../../Properties/rgb");
const SetPs = require("../../Commands/setPs");
const SaveState = require("../../Properties/saveState");

module.exports = class MiioAdapterDeviceYeelinkLight extends Light {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yeelink.light";
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
                command: new SetCtAbx(),
                property: new Ct(),
            },
            RGB: {
                command: new SetRgb(),
                property: new Rgb(),
            },
            RememberState: {
                command: new SetPs(),
                property: new SaveState(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};