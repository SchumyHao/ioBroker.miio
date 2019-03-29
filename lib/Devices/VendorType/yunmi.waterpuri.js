"use strict";

const objectExtend = require("../../tools").objectExtend;
const Waterpuri = require("../Type/waterpuri");

module.exports = class MiioAdapterDeviceYunmiWaterpuri extends Waterpuri {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yunmi.waterpuri";
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
        return objectExtend(super.roState, {
            power: {
                delete: true
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {




            TDS: {
                delete: true
            },
            filter1Life: {
                delete: true
            },
            filter1State: {
                delete: true
            },
            filterLife: {
                delete: true
            },
            filterState: {
                delete: true
            },
            life: {
                delete: true
            },
            state: {
                delete: true
            },
            level: {
                delete: true
            },
            volume: {
                delete: true
            },
            Filter: {
                delete: true
            },
            usage: {
                delete: true
            },
            temperature: {
                delete: true
            },
            uvLife: {
                delete: true
            },
            uvState: {
                delete: true
            },
            elecvalState: {
                delete: true
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};