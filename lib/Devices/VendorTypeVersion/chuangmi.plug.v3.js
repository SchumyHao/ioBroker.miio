"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const SetOn = require("../../Commands/setOn");
const SetOff = require("../../Commands/setOff");
const On = require("../../Properties/on");
const SetUsbOn = require("../../Commands/setUsbOn");
const SetUsbOff = require("../../Commands/setUsbOff");
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
                delete: true
            },
            wifiLed: {
                command: new SetWifiLed(),
                property: new WifiLed(),
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            power: {
                property: new On(),
            },
            usbPower: {
                property: new UsbOn(),
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterWOState>}
     */
    get woState() {
        return objectExtend(super.woState, {
            setOn: {
                command: new SetOn(),
            },
            setOff: {
                command: new SetOff(),
            },
            setUsbOn: {
                command: new SetUsbOn(),
            },
            setUsbOff: {
                command: new SetUsbOff(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};