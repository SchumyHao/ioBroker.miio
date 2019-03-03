"use strict";

const objectExtend = require("../../tools").objectExtend;
const Light = require("../Type/light");
const SetCtAbx = require("../../Commands/setCtAbx");
const Ct = require("../../Properties/ct");
const SetRgb = require("../../Commands/setRgb");
const Rgb = require("../../Properties/rgb");

module.exports = class MiioAdapterDeviceYeelinkLight extends Light {
    constructor(miioDev) {
        super(miioDev);

        this.rwState = objectExtend(super.getRWStateRaw(), {
            colorTemperature: {
                command: new SetCtAbx(miioDev),
                property: new Ct(miioDev),
            },
            RGB: {
                command: new SetRgb(miioDev),
                property: new Rgb(miioDev),
            }
        });
        this.roState = {};
        this.woState = {};
    }

    // function below may be overwritten
    getDeviceName() {
        return "yeelink.light";
    }

    getDeviceType() {
        return "VendorTypeDevice";
    }

    getDeviceStates() {
        return objectExtend(super.getDeviceStates(),
            this.transState(this.rwState, this.roState, this.woState));
    }

    getSupportCommands() {
        const commands = super.getSupportCommands();

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
};