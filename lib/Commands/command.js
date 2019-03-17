"use strict";

module.exports = class MiioCommand {

    /**
     * 
     * @param {string} command 
     * @param {AdapterMiio.MiioAdapterCommandOpt} opt 
     */
    constructor(command, opt) {
        this.command = command;
        this.name = opt.name;
        this.desc = opt.desc || undefined;
        // para = [{
        //    type: PARA_TYPE,
        //    vtype: if obj para, this is value type
        //    max: max val,
        //    min: min val,
        //    enum: [
        //        SHOW_NAME
        //    ],
        //    obj: {
        //        1: SHOW_NAME
        //    },
        //}]
        this.para = opt.para || [];
        this.returnType = opt.returnType || undefined;
        if (this.para.length) {
            if (opt.statePara) {
                this.statePara = opt.statePara;
            } else {
                this.statePara = {};
                this.statePara.type = this.para[0].type;
                if (this.para[0].min !== undefined) {
                    this.statePara.min = this.para[0].min;
                }
                if (this.para[0].max !== undefined) {
                    this.statePara.max = this.para[0].max;
                }
                if (this.para[0].unit !== undefined) {
                    this.statePara.unit = this.para[0].unit;
                }
            }
        }
    }
};