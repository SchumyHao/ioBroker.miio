"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Aqi = require("../../Properties/aqi");
const SetMode = require("../../Commands/setMode");
const Mode = require("../../Properties/mode");

module.exports = class MiioAdapterDeviceTypeAirPurifier extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "airpurifier";
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
            mode: {
                command: new SetMode(),
                property: new Mode(),
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            aqi: {
                property: new Aqi(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};