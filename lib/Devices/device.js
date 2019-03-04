"use strict";

const EventEmitter = require("events").EventEmitter;

module.exports = class MiioAdapterDevice extends EventEmitter {
    constructor(miioDev) {
        super();

        this.miioDev = miioDev;
        this.miioID = miioDev.id.replace(/^miio:/, "");
        this.props = null;
        // WARNING: Hack miio lib
        this.miioDev.propertyUpdated = this.propertyUpdated.bind(this);
    }

    attributeUpdate(state, val, oldVal) {
        this.emit("attrUpdate", this.miioID, state, val, oldVal);
    }

    getMiioDevice() {
        return this.miioDev;
    }

    getDeviceID() {
        return this.miioID;
    }

    transState(rw, ro, wo) {
        const states = {};

        for (const k in rw) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: true,
                    read: true,
                    name: k,
                };
                if (rw[k].command.statePara && rw[k].command.statePara.type &&
                    rw[k].property.statePara && rw[k].property.statePara.type &&
                    rw[k].command.statePara.type === rw[k].property.statePara.type) {
                    states[k].type = rw[k].command.statePara.type;
                } else {
                    this.emit("warning", `Cannot translate state=${k} to adapter state!`);
                }
                if (rw[k].command.statePara && rw[k].command.statePara.hasOwnProperty("min") &&
                    rw[k].property.statePara && rw[k].property.statePara.hasOwnProperty("min") &&
                    rw[k].command.statePara.min === rw[k].property.statePara.min) {
                    states[k].min = rw[k].command.statePara.min;
                }
                if (rw[k].command.statePara && rw[k].command.statePara.hasOwnProperty("max") &&
                    rw[k].property.statePara && rw[k].property.statePara.hasOwnProperty("max") &&
                    rw[k].command.statePara.max === rw[k].property.statePara.max) {
                    states[k].max = rw[k].command.statePara.max;
                }
                if ((rw[k].command.statePara && rw[k].command.statePara.unit) ||
                    (rw[k].property.statePara && rw[k].property.statePara.unit)) {
                    states[k].unit = rw[k].property.statePara.unit || rw[k].command.statePara.unit;
                }
            }
        }

        for (const k in ro) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: false,
                    read: true,
                };
            }
        }

        for (const k in wo) {
            if (!states.hasOwnProperty(k)) {
                states[k] = {
                    write: false,
                    read: true,
                };
            }
        }
        return states;
    }

    async invokeCommand(cmd, val) {
        const cc = cmd.command;
        const cvl = [];
        const valType = typeof val;

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

    listen(props) {
        this.props = props;
        for (const k in props) {
            if (props.hasOwnProperty(k)) {
                const prop = props[k];
                this.miioDev.defineProperty(prop.prop);
            }
        }
    }

    // function below may be overwritten
    getDeviceName() {
        return "Device";
    }

    getDeviceType() {
        return "MiioAdapterDevice";
    }

    getDeviceStates() {
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
};