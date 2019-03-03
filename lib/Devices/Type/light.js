"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;
const SetPower = require("../../Commands/setPower");
const SetBright = require("../../Commands/setBright");
const Power = require("../../Properties/power");
const Bright = require("../../Properties/bright");

module.exports = class MiioAdapterDeviceTypeLight extends MiioAdapterDevice {
    constructor(miioDev) {
        super(miioDev);

        this.rwState = {
            power: {
                command: new SetPower(miioDev),
                property: new Power(miioDev),
            },
            brightness: {
                command: new SetBright(miioDev),
                property: new Bright(miioDev),
            }
        };
        this.roState = {};
        this.woState = {};
    }

    // function below may be overwritten
    getDeviceName() {
        return "light";
    }

    getDeviceType() {
        return "TypeDevice";
    }

    getDeviceStates() {
        return objectExtend(super.getDeviceStates(),
            this.transState(this.rwState, this.roState, this.woState));
    }

    getSupportCommands() {
        const commands = {};

        for (const k in this.rwState) {
            if (this.rwState.hasOwnProperty(k)) {
                commands[k] = this.rwState[k].command;
            }
        }

        for (const k in this.woState) {
            if (this.woState.hasOwnProperty(k)) {
                commands[k] = this.woState[k].command;
            }
        }
        return commands;
    }

    getSupportProperties() {
        const properties = {};

        for (const k in this.rwState) {
            if (this.rwState.hasOwnProperty(k)) {
                properties[k] = this.rwState[k].property;
            }
        }

        for (const k in this.roState) {
            if (this.roState.hasOwnProperty(k)) {
                properties[k] = this.roState[k].property;
            }
        }
        return properties;
    }

    getRWStateRaw() {
        return this.rwState;
    }
};