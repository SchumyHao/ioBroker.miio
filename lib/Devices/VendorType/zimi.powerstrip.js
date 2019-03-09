"use strict";

const objectExtend = require("../../tools").objectExtend;
const Powerstrip = require("../Type/powerstrip");
const SetPowerPrice = require("../../Commands/setPowerPrice");
const PowerPrice = require("../../Properties/powerPrice");
const SetWifiLed = require("../../Commands/setWifiLed");
const WifiLed = require("../../Properties/wifiLed");

module.exports = class MiioAdapterDeviceZimiPowerstrip extends Powerstrip {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zimi.powerstrip";
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
            powerPrice: {
                command: new SetPowerPrice(),
                property: new PowerPrice(),
            },
            wifiLed: {
                command: new SetWifiLed(),
                property: new WifiLed(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};