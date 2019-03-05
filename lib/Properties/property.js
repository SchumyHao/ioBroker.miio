"use strict";

module.exports = class MiioProperty {

    /**
     * 
     * @param {string} prop 
     * @param {AdapterMiio.MiioAdapterPropertyOpt} opt 
     */
    constructor(prop, opt) {
        this.prop = prop;
        this.name = opt.name;
        this.desc = opt.desc || undefined;
        this.type = opt.type || "string";
        this.vtype = opt.vtype,
        this.min = opt.min,
        this.max = opt.max,
        this.unit = opt.unit,
        this.obj = opt.obj,
        this.statePara = opt.statePara || {
            type: opt.vtype || opt.type,
            min: opt.min,
            max: opt.max,
            unit: opt.unit
        };
    }
};