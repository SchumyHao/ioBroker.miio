"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const SetBright = require("../../Commands/setBright");
const Power = require("../../Properties/power");
const Bright = require("../../Properties/bright");

module.exports = class MiioAdapterDeviceTypeLight extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "light";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "TypeDevice";
    }


    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return {
            power: {
                command: new SetPower(),
                property: new Power(),
            },
            brightness: {
                command: new SetBright(),
                property: new Bright(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};