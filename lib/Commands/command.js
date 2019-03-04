"use strict";

module.exports = class MiioCommand {
    constructor(command, opt) {
        this.command = command;
        this.name = opt.name || "FIXME: I need a name";
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
        this.statePara = opt.statePara || {
            type: this.para[0].type,
            min: this.para[0].min,
            max: this.para[0].max,
            unit: this.para[0].unit
        };
    }
};