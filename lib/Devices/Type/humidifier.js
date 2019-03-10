"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const SetMode = require("../../Commands/setMode");
const Mode = require("../../Properties/mode");
const TempDec = require("../../Properties/tempDec");
const Humidity = require("../../Properties/humidity");
const SetBuzzer = require("../../Commands/setBuzzer");
const Buzzer = require("../../Properties/buzzer");
const SetLedB = require("../../Commands/setLedB");
const LedB = require("../../Properties/ledB");
const SetChildLock = require("../../Commands/setChildLock");
const ChildLock = require("../../Properties/childLock");
const HwVersion = require("../../Properties/hwVersion");
const SetLimitHum = require("../../Commands/setLimitHum");
const LimitHum = require("../../Properties/limitHum");
const UseTime = require("../../Properties/useTime");

module.exports = class MiioAdapterDeviceTypeHumidifier extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "humidifier";
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
            },
            buzzer: {
                command: new SetBuzzer(),
                property: new Buzzer(),
            },
            ledBrightnessLevel: {
                command: new SetLedB(),
                property: new LedB(),
            },
            childLock: {
                command: new SetChildLock(),
                property: new ChildLock(),
            },
            targetHumidity: {
                command: new SetLimitHum(),
                property: new LimitHum(),
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            temperature: {
                property: new TempDec(),
            },
            humidity: {
                property: new Humidity(),
            },
            hardwareVersion: {
                property: new HwVersion(),
            },
            usedTime: {
                property: new UseTime(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};