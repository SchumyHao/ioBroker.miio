"use strict";

const MiioAdapterDevice = require("../device");
const objectExtend = require("../../tools").objectExtend;
const SetPower = require("../../Commands/setPower");
const SetBright = require("../../Commands/setBright");
const Power = require("../../Properties/power");
const Bright = require("../../Properties/bright");

module.exports = class MiioAdapterDeviceTypeLight extends MiioAdapterDevice {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "light";
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
            brightness: {
                command: new SetBright(),
                property: new Bright(),
            }
        };
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


    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterProperty>}
     */
    get properties() {
        /** @type {Record<string, AdapterMiio.MiioAdapterProperty>} */
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

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterCommand>}
     */
    get commands() {
        /** @type {Record<string, AdapterMiio.MiioAdapterCommand>} */
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

    /**
     * @returns {Record<string, ioBroker.StateCommon>}
     */
    get states() {
        return objectExtend(super.states,
            MiioAdapterDeviceTypeLight.transState(this.rwState, this.roState, this.woState));
    }

    /**
     * 
     * @param {miio.Device} miioDev 
     */
    constructor(miioDev) {
        super(miioDev);
    }
};