"use strict";

const objectExtend = require("../../tools").objectExtend;
const Light = require("../Type/light");
const SetCtAbx = require("../../Commands/setCtAbx");
const Ct = require("../../Properties/ct");
const SetRgb = require("../../Commands/setRgb");
const Rgb = require("../../Properties/rgb");

module.exports = class MiioAdapterDeviceYeelinkLight extends Light {
    /**
     * @returns {string}
     */
    static get deviceName() {
        return "yeelink.light";
    }

    /**
     * @returns {string}
     */
    static get deviceType() {
        return "VendorTypeDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    static get rwState() {
        return objectExtend(super.rwState, {
            colorTemperature: {
                command: new SetCtAbx(),
                property: new Ct(),
            },
            RGB: {
                command: new SetRgb(),
                property: new Rgb(),
            }
        });
    }
    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    static get roState() {
        return {};
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterWOState>}
     */
    static get woState() {
        return {};
    }

    static get commands() {
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

    static get states() {
        return objectExtend(super.states,
            this.transState(this.rwState, this.roState, this.woState));
    }

    constructor(miioDev) {
        super(miioDev);
    }
};