"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Temperature = require("../../Properties/temperature");
const Current = require("../../Properties/current");
const PowerstripMode = require("../../Properties/powerstripMode");
const PowerConsumeRate = require("../../Properties/powerConsumeRate");


module.exports = class MiioAdapterDeviceTypePowerstrip extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "powerstrip";
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
            },
            current: {
                property: new Current(),
            },
            mode: {
                property: new PowerstripMode(),
            },
            load: {
                property: new PowerConsumeRate(),
            }
        };
    }

    /**
     * 
     * @returns {number}
     */
    get polling() {
        return 3000;
    }

    constructor(miioDev) {
        super(miioDev);
    }
};