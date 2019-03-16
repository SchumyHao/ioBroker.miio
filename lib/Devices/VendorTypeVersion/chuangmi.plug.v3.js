"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const SetPower = require("../../Commands/setPowerChuangmiPlugV3");
const On = require("../../Properties/on");
const SetUsbPower = require("../../Commands/setUsbPowerChuangmiPlugV3");
const UsbOn = require("../../Properties/usbOn");
const SetWifiLed = require("../../Commands/setWifiLed");
const WifiLed = require("../../Properties/wifiLed");

try {
    // @ts-ignore VendorType device may not exist, just try Type device
    Parent = require("../VendorType/chuangmi.plug");
} catch (e) {
    try {
        Parent = require("../Type/plug");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceChuangmiPlugV3 extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "chuangmi.plug.v3";
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
            power: {
                command: new SetPower(),
                property: new On(),
            },
            usbPower: {
                command: new SetUsbPower(),
                property: new UsbOn(),
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