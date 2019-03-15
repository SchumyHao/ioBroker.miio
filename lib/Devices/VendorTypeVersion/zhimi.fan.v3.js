"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const Humidity = require("../../Properties/humidity");
const TempDec = require("../../Properties/tempDec");
const Battery = require("../../Properties/battery");
const BatCharge = require("../../Properties/batCharge");
const ButtonPressed = require("../../Properties/buttonPressed");

try {
    // @ts-ignore VendorType device may not exist, just try Type device
    Parent = require("../VendorType/zhimi.fan");
} catch (e) {
    try {
        Parent = require("../Type/fan");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceZhimiFanV3 extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zhimi.fan.v3";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeVersionDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            humidity: {
                property: new Humidity(),
            },
            temperature: {
                property: new TempDec(),
            },
            battery: {
                property: new Battery(),
            },
            ChargeState: {
                property: new BatCharge(),
            },
            LastPressedButton: {
                property: new ButtonPressed(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};