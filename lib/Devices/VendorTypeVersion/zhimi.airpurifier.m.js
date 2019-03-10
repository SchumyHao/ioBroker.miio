"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;
const AverageAqi = require("../../Properties/averageAqi");
const Humidity = require("../../Properties/humidity");
const TempDec = require("../../Properties/tempDec");
const SetLevelFavorite = require("../../Commands/setLevelFavorite");
const FavoriteLevel = require("../../Properties/favoriteLevel");
const UseTime = require("../../Properties/useTime");
const PurifyVolume = require("../../Properties/purifyVolume");
const SetActSleep = require("../../Commands/setActSleep");
const ActSleep = require("../../Properties/actSleep");

try {
    Parent = require("../VendorType/zhimi.airpurifier");
} catch (e) {
    try {
        Parent = require("../Type/airpurifier");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceZhimiAirpurifierM extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "zhimi.airpurifier.m";
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
            learnSleepMode: {
                command: new SetActSleep(),
                property: new ActSleep(),
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
            Temperature: {
                property: new TempDec(),
            },
            usedTime: {
                property: new UseTime(),
            },
            purifyVolume: {
                property: new PurifyVolume(),
            },
            illuminance: {
                delete: true,
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};