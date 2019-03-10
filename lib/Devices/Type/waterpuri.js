"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");

const Tds = require("../../Properties/tds");
const Filter1Life = require("../../Properties/filter1Life");
const Filter1State = require("../../Properties/filter1State");
const FilterLife = require("../../Properties/filterLife");
const FilterState = require("../../Properties/filterState");
const Life = require("../../Properties/life");
const State = require("../../Properties/state");
const Level = require("../../Properties/level");
const Volume = require("../../Properties/waterpuriVolume");
const Filter = require("../../Properties/filter");
const Usage = require("../../Properties/usage");
const Temperature = require("../../Properties/temperature");
const UvLife = require("../../Properties/uvLife");
const UvState = require("../../Properties/uvState");
const ElecvalState = require("../../Properties/elecvalState");


module.exports = class MiioAdapterDeviceTypeWaterPuri extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "waterpuri";
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
            TDS: {
                property: new Tds(),
            },
            filter1Life: {
                property: new Filter1Life(),
            },
            filter1State: {
                property: new Filter1State(),
            },
            filterLife: {
                property: new FilterLife(),
            },
            filterState: {
                property: new FilterState(),
            },
            life: {
                property: new Life(),
            },
            state: {
                property: new State(),
            },
            level: {
                property: new Level(),
            },
            volume: {
                property: new Volume(),
            },
            Filter: {
                property: new Filter(),
            },
            usage: {
                property: new Usage(),
            },
            temperature: {
                property: new Temperature(),
            },
            uvLife: {
                property: new UvLife(),
            },
            uvState: {
                property: new UvState(),
            },
            elecvalState: {
                property: new ElecvalState(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};