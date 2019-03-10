"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Aqi = require("../../Properties/aqi");
const SetMode = require("../../Commands/setMode");
const Mode = require("../../Properties/mode");
const Filter1Life = require("../../Properties/filter1Life");
const F1HourUsed = require("../../Properties/f1HourUsed");
const Motor1Speed = require("../../Properties/motor1Speed");
const SetLed = require("../../Commands/setLed");
const Led = require("../../Properties/led");
const SetChildLock = require("../../Commands/setChildLock");
const ChildLock = require("../../Properties/childLock");
const SetBuzzer = require("../../Commands/setBuzzer");
const Buzzer = require("../../Properties/buzzer");
const Bright = require("../../Properties/brightAirpurifier");
const SetLedB = require("../../Commands/setLedB");
const LedB = require("../../Properties/ledB");

module.exports = class MiioAdapterDeviceTypeAirPurifier extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "airpurifier";
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
            led: {
                command: new SetLed(),
                property: new Led(),
            },
            childLock: {
                command: new SetChildLock(),
                property: new ChildLock(),
            },
            buzzer: {
                command: new SetBuzzer(),
                property: new Buzzer(),
            },
            ledBrightnessLevel: {
                command: new SetLedB(),
                property: new LedB(),
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            aqi: {
                property: new Aqi(),
            },
            filterLife: {
                property: new Filter1Life(),
            },
            filterUsedTime: {
                property: new F1HourUsed(),
            },
            motor1Speed: {
                property: new Motor1Speed(),
            },
            illuminance: {
                property: new Bright(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};