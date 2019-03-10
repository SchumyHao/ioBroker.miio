"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Aqi = require("../../Properties/aqi");
const Battery = require("../../Properties/battery");
const UsbState = require("../../Properties/usbState");
const SetTimeState = require("../../Commands/setTimeState");
const TimeState = require("../../Properties/timeState");
const SetNightState = require("../../Commands/setNightState");
const NightState = require("../../Properties/nightState");

module.exports = class MiioAdapterDeviceTypeAirMonitor extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "airmonitor";
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
            displayClock: {
                command: new SetTimeState(),
                property: new TimeState(),
            },
            nightMode: {
                command: new SetNightState(),
                property: new NightState(),  
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
            battery: {
                property: new Battery(),
            },
            USBConnected: {
                property: new UsbState(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};