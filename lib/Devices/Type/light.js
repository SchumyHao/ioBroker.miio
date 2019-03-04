"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;
const SetPower = require("../../Commands/setPower");
const SetBright = require("../../Commands/setBright");
const Power = require("../../Properties/power");
const Bright = require("../../Properties/bright");

module.exports = class MiioAdapterDeviceTypeLight extends MiioAdapterDevice {
    static get deviceName() {
        return "light";
    }

    static get deviceType() {
        return "TypeDevice";
    }

    static get rwState() {
        return {
            power: {
                command: new SetPower(),
                property: new Power(),
            },
            brightness: {
                command: new SetBright(),
                property: new Bright(),
            }
        };
    }

    static get roState() {
        return {};
    }

    static get woState() {
        return {};
    }

    static get properties() {
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

    static get commands() {
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

    static get states() {
        return objectExtend(super.states,
            this.transState(this.rwState, this.roState, this.woState));
    }

    constructor(miioDev) {
        super(miioDev);
    }
};