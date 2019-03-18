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
        this.vtype = opt.vtype;
        this.min = opt.min;
        this.max = opt.max;
        this.unit = opt.unit;
        this.obj = opt.obj;
        this.mapper = opt.mapper;
        if (opt.statePara) {
            this.statePara = opt.statePara;
        } else {
            this.statePara = {};
            this.statePara.type = opt.vtype || opt.type;
            if (opt.min !== undefined) {
                this.statePara.min = opt.min;
            }
            if (opt.max !== undefined) {
                this.statePara.max = opt.max;
            }
            if (opt.unit !== undefined) {
                this.statePara.unit = opt.unit;
            }
        }
    }
};