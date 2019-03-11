"use strict";

const MiioAdapterDevice = require("../device");
const Tds = require("../../Properties/tds");
const WaterRemainTime = require("../../Properties/waterRemainTime");
const CurrTempe = require("../../Properties/currTempe");
const SetTempeSetup = require("../../Commands/setTempeSetup");
const SetupTempe = require("../../Properties/setupTempe");
const MinSetTempe = require("../../Properties/minSetTempe");
const SetDrinkRemindEnable = require("../../Commands/setDrinkRemindEnable");
const DrinkRemind = require("../../Properties/drinkRemind");
const SetDrinkRemindTime = require("../../Commands/setDrinkRemindTime");
const DrinkRemindTime = require("../../Properties/drinkRemindTime");
const WorkMode = require("../../Properties/workMode");
const DrinkTimeCount = require("../../Properties/drinkTimeCount");

module.exports = class MiioAdapterDeviceTypeKettle extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "kettle";
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
            WarmWaterTemperature: {
                command: new SetTempeSetup(),
                property: new SetupTempe(),
            },
            remindDrink: {
                command: new SetDrinkRemindEnable(),
                property: new DrinkRemind(),
            },
            remindDrinkDuration: {
                command: new SetDrinkRemindTime(),
                property: new DrinkRemindTime(),
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            TDS: {
                property: new Tds(),
            },
            waterStorageTime: {
                property: new WaterRemainTime(),
            },
            currentWaterTemperature: {
                property: new CurrTempe(),
            },
            minWarmWaterTemperature: {
                property: new MinSetTempe(),
            },
            workMode: {
                property: new WorkMode(),
            },
            lastDrinkTime: {
                property: new DrinkTimeCount(),
            }
        };
    }

    constructor(miioDev) {
        super(miioDev);
    }
};