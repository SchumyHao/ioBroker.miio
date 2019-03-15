"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const AverageAqi = require("../../Properties/averageAqi");
const Humidity = require("../../Properties/humidity");
const TempDec = require("../../Properties/tempDec");
const SetLevelFavorite = require("../../Commands/setLevelFavorite");
const FavoriteLevel = require("../../Properties/favoriteLevel");
const UseTime = require("../../Properties/useTime");
const Motor2Speed = require("../../Properties/motor2Speed");
const PurifyVolume = require("../../Properties/purifyVolume");
const SetVolume = require("../../Commands/setVolume");
const Volume = require("../../Properties/volume");
const SetActSleep = require("../../Commands/setActSleep");
const ActSleep = require("../../Properties/actSleep");

try {
    // @ts-ignore VendorType device may not exist, just try Type device
    Parent = require("../VendorType/zhimi.airpurifier");
} catch (e) {
    try {
        Parent = require("../Type/airpurifier");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceZhimiAirpurifierV6 extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zhimi.airpurifier.v6";
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
            favoriteLevel: {
                command: new SetLevelFavorite(),
                property: new FavoriteLevel(),
            },
            volume: {
                command: new SetVolume(),
                property: new Volume(),
            },
            learnSleepMode: {
                command: new SetActSleep(),
                property: new ActSleep(),
            },
            buzzer: {
                delete: true,
            },
            ledBrightnessLevel: {
                delete: true,
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {
            averageAqi: {
                property: new AverageAqi(),
            },
            humidity: {
                property: new Humidity(),
            },
            temperature: {
                property: new TempDec(),
            },
            usedTime: {
                property: new UseTime(),
            },
            motor2Speed: {
                property: new Motor2Speed(),
            },
            purifyVolume: {
                property: new PurifyVolume(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};