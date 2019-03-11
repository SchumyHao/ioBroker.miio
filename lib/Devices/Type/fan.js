"use strict";

const MiioAdapterDevice = require("../device");
const SetPower = require("../../Commands/setPower");
const Power = require("../../Properties/power");
const SetChildLock = require("../../Commands/setChildLock");
const ChildLock = require("../../Properties/childLock");
const SetBuzzer = require("../../Commands/setBuzzer");
const Buzzer = require("../../Properties/buzzer");
const SetLedB = require("../../Commands/setLedB");
const LedB = require("../../Properties/ledB");
const SetAngle = require("../../Commands/setAngle");
const Angle = require("../../Properties/angle");
const SetNaturalLevel = require("../../Commands/setNaturalLevel");
const NaturalLevel = require("../../Properties/naturalLevel");
const SetSpeedLevel = require("../../Commands/setSpeedLevel");
const SpeedLevel = require("../../Properties/speedLevel");
const SetAngleEnable = require("../../Commands/setAngleEnable");
const AngleEnable = require("../../Properties/angleEnable");
const Speed = require("../../Properties/speed");
const AcPower = require("../../Properties/acPower");
const SetPoweroffTime = require("../../Commands/setPoweroffTime");
const PoweroffTime = require("../../Properties/poweroffTime");
const UseTime = require("../../Properties/useTime");

module.exports = class MiioAdapterDeviceTypeFan extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "fan";
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
            },
            angle: {
                command: new SetAngle(),
                property: new Angle(),
            },
            naturalSpeed: {
                command: new SetNaturalLevel(),
                property: new NaturalLevel(),
            },
            directSpeed: {
                command: new SetSpeedLevel(),
                property: new SpeedLevel(),
            },
            oscillate: {
                command: new SetAngleEnable(),
                property: new AngleEnable(),
            },
            timedOff: {
                command: new SetPoweroffTime(),
                property: new PoweroffTime(),
            }
        };
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {
            motorSpeed: {
                property: new Speed(),
            },
            ConnectAC: {
                property: new AcPower(),
            },
            UseTime: {
                property: new UseTime(),
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