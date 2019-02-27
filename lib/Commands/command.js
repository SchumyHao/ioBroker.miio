"use strict";

module.exports = class MiioCommand {
    constructor(command, opt) {
        this.command = command;
        this.name = opt.name || "FIXME: I need a name";
        this.desc = opt.desc || undefined;
        // para = [{
        //    type: PARA_TYPE,
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
        this.returnType = opt.returnType || undefined
    }
};