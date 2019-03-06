"use strict";

const miio = require("miio");
const EventEmitter = require("events").EventEmitter;

module.exports = class MiioAdapterDevice extends EventEmitter {
    /**
     * @returns {string}
     */
    static get deviceName() {
        return "Device";
    }

    /**
     * @returns {string}
     */
    static get deviceType() {
        return "MiioAdapterDevice";
    }

    /**
     * @returns {Record<string, ioBroker.StateCommon>}
     */
    static get states() {
        return {
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        };
    }

    /**
     * 
     * @param {Record<string, AdapterMiio.MiioAdapterRWState>} rw 
     * @param {Record<string, AdapterMiio.MiioAdapterROState>} ro 
     * @param {Record<string, AdapterMiio.MiioAdapterWOState>} wo 
     */
    static transState(rw, ro, wo) {
        /** @type {Record<string, ioBroker.StateCommon>} */
        const states = {};

        for (const k in rw) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: true,
                    read: true,
                    name: k,
                    role: "state"
                };
                const command = rw[k].command;
                const prop = rw[k].property;
                if (command.statePara) {
                    states[k].type = command.statePara.type;
                } else {
                    states[k].type = prop.statePara.type;
                }
                if (command.statePara && command.statePara.hasOwnProperty("min")) {
                    states[k].min = command.statePara.min;
                } else if (prop.statePara && prop.statePara.hasOwnProperty("min")) {
                    states[k].min = prop.statePara.min;
                }
                if (command.statePara && command.statePara.hasOwnProperty("max")) {
                    states[k].max = command.statePara.max;
                } else if (prop.statePara && prop.statePara.hasOwnProperty("max")) {
                    states[k].max = prop.statePara.max;
                }
                if (command.statePara && command.statePara.hasOwnProperty("max")) {
                    states[k].max = command.statePara.max;
                } else if (prop.statePara && prop.statePara.hasOwnProperty("max")) {
                    states[k].max = prop.statePara.max;
                }
                if (command.statePara && command.statePara.hasOwnProperty("unit")) {
                    states[k].unit = command.statePara.unit;
                } else if (prop.statePara && prop.statePara.hasOwnProperty("unit")) {
                    states[k].unit = prop.statePara.unit;
                }
            }
        }

        for (const k in ro) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: false,
                    read: true,
                    name: k,
                    role: "state"
                };
            }
        }

        for (const k in wo) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: false,
                    read: true,
                    name: k,
                    role: "state"
                };
            }
        }
        return states;
    }

    /**
     * 
     * @param {miio.Device} miioDev 
     */
    constructor(miioDev) {
        super();

        this.miioDev = miioDev;
        this.miioID = miioDev.id.replace(/^miio:/, "");
        /** @type {Record<string, AdapterMiio.MiioAdapterProperty>} */
        this.props;
        // WARNING: Hack miio lib
        this.miioDev.propertyUpdated = this.propertyUpdated.bind(this);
    }

    /**
     * 
     * @param {string} state 
     * @param {any} val 
     */
    attributeUpdate(state, val) {
        this.emit("attrUpdate", this.miioID, state, val);
    }

    /**
     * @returns {miio.Device}
     */
    get miioDevice() {
        return this.miioDev;
    }

    /**
     * @returns {string}
     */
    getDeviceID() {
        return this.miioID;
    }

    /**
     * 
     * @param {AdapterMiio.MiioAdapterCommand} cmd
     * @param {any} val
     */
    async invokeCommand(cmd, val) {
        const cc = cmd.command;
        const cvl = [];
        const valType = typeof val;

        if (cmd.para && (cmd.para.length !== 0)) {
            if (valType !== cmd.para[0].type) {
                this.emit("warning", `value=${JSON.stringify(val)} dose not match to command parameter type ${cmd.para[0].type}.`);
                return false;
            }
            if (cc === "set_rgb") {
                cvl.push(parseInt(val.replace(/^#/, ""), 16));
            } else {
                for (let i = 0; i < cmd.para.length; i++) {
                    const p = cmd.para[i];
    
                    if (p.default) {
                        cvl.push(p.default);
                        continue;
                    }
                    if (p.vtype && p.obj) {
                        if (valType === "boolean") {
                            if (val) {
                                cvl.push(p.obj.true);
                            } else {
                                cvl.push(p.obj.false);
                            }
                        }
                        continue;
                    }
                    cvl.push(val);
                }
            }
            return this.miioDev.call(cc, cvl)
                .then(this.miioDev.checkOk);
        }

        return this.miioDev.call(cc)
            .then(this.miioDev.checkOk);
    }

    /**
     * 
     * @param {string} p 
     * @param {any} v 
     */
    propertyUpdated(p, v) {
        for (const k in this.props) {
            if (p === this.props[k].prop) {
                const prop = this.props[k];
                let value = v;
                if (p === "rgb") {
                    let s = "000000" + parseInt(v).toString(16);
                    s = s.substr(s.length-6);
                    value = `#${s}`;
                } else if (prop.obj) {
                    value = prop.obj[v];
                } else if ((typeof v === "string") && (prop.type === "number")) {
                    value = +v;
                }

                this.attributeUpdate(k, value);
            }
        }
    }

    /**
     * 
     * @param {Record<string, AdapterMiio.MiioAdapterProperty>} props 
     */
    listen(props) {
        this.props = props;
        for (const k in props) {
            if (props.hasOwnProperty(k)) {
                const prop = props[k];
                this.miioDev.defineProperty(prop.prop);
            }
        }
    }
};