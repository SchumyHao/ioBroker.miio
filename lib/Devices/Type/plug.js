"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Temperature = require("../../Properties/temperature");


module.exports = class MiioAdapterDeviceTypePlug extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "plug";
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
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            temperature: {
                property: new Temperature(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};