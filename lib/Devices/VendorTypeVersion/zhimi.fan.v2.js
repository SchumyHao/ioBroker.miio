"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const Humidity = require("../../Properties/humidity");
const TempDec = require("../../Properties/tempDec");
const Battery = require("../../Properties/battery");
const BatCharge = require("../../Properties/batCharge");
const ButtonPressed = require("../../Properties/buttonPressed");
const SetLed = require("../../Commands/setLed");
const Led = require("../../Properties/led");
const BatState = require("../../Properties/batState");

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

module.exports = class MiioAdapterDeviceZhimiFanV2 extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zhimi.fan.v2";
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
            led: {
                command: new SetLed(),
                property: new Led(),
            }
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
            },
            batteryState: {
                property: new BatState(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};