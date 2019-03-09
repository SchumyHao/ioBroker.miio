"use strict";

const objectExtend = require("../../tools").objectExtend;
const Powerstrip = require("../Type/powerstrip");
const Voltage = require("../../Properties/voltage");
const PowerFactor = require("../../Properties/powerFactor");
const ElecLeakage = require("../../Properties/elecLeakage");

module.exports = class MiioAdapterDeviceQmiPowerstrip extends Powerstrip {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "qmi.powerstrip";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            voltage: {
                property: new Voltage(),
            },
            powerFactor: {
                property: new PowerFactor(),
            },
            LeakageCurrent: {
                property: new ElecLeakage(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};