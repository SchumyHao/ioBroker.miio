"use strict";

const objectExtend = require("../../tools").objectExtend;
const Light = require("../Type/light");
const SetCtAbx = require("../../Commands/setCtAbx");
const Ct = require("../../Properties/ct");
const SetRgb = require("../../Commands/setRgb");
const Rgb = require("../../Properties/rgb");
const SetPs = require("../../Commands/setPs");
const SaveState = require("../../Properties/saveState");

module.exports = class MiioAdapterDeviceYeelinkLight extends Light {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yeelink.light";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
            colorTemperature: {
                command: new SetCtAbx(),
                property: new Ct(),
            },
            RGB: {
                command: new SetRgb(),
                property: new Rgb(),
            },
            RememberState: {
                command: new SetPs(),
                property: new SaveState(),
            }
        });
    }
    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return {};
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterWOState>}
     */
    get woState() {
        return {};
    }

    get commands() {
        const commands = super.commands;

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

    /**
     * @returns {Record<string, ioBroker.StateCommon>}
     */
    get states() {
        return objectExtend(super.states,
            MiioAdapterDeviceYeelinkLight.transState(this.rwState, this.roState, this.woState));
    }

    constructor(miioDev) {
        super(miioDev);
    }
};