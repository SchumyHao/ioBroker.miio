"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const Aqi = require("../../Properties/aqi");
const AverageAqi = require("../../Properties/averageAqi");
const SetMode = require("../../Commands/setMode");
const Mode = require("../../Properties/mode");
const FilterLife = require("../../Properties/filterLife");
const F1HourUsed = require("../../Properties/f1HourUsed");
const Motor1Speed = require("../../Properties/motor1Speed");
const SetLed = require("../../Commands/setLed");
const Led = require("../../Properties/led");
const SetChildLock = require("../../Commands/setChildLock");
const ChildLock = require("../../Properties/childLock");
const SetBuzzer = require("../../Commands/setBuzzer");
const Buzzer = require("../../Properties/buzzer");
const TempDec = require("../../Properties/tempDec");
const Humidity = require("../../Properties/humidity");
const UseTime = require("../../Properties/useTime");
const SetLevelFavorite = require("../../Commands/setLevelFavorite");
const FavoriteLevel = require("../../Properties/favoriteLevel");
const Co2 = require("../../Properties/co2");
const LedLevel = require("../../Properties/ledLevel");

module.exports = class MiioAdapterDeviceTypeAirFresh extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "airfresh";
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
            favoriteLevel: {
                command: new SetLevelFavorite(),
                property: new FavoriteLevel(),
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
            averageAqi: {
                property: new AverageAqi(),
            },
            humidity: {
                property: new Humidity(),
            },
            Temperature: {
                property: new TempDec(),
            },
            filterLife: {
                property: new FilterLife(),
            },
            filterUsedTime: {
                property: new F1HourUsed(),
            },
            motor1Speed: {
                property: new Motor1Speed(),
            },
            usedTime: {
                property: new UseTime(),
            },
            co2: {
                property: new Co2(),
            },
            ledBrightnessLevel: {
                property: new LedLevel(),
            }
        };
    }

    /**
     * 
     * @returns {number}
     */
    get polling() {
        return 3000;
    }

    constructor(miioDev) {
        super(miioDev);
    }
};