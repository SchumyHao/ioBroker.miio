"use strict";

module.exports = class MiioProperty {
    constructor(prop, opt) {
        this.prop = prop;
        this.name = opt.name || "FIXME: I need a name";
        this.desc = opt.desc || undefined;
        this.type = opt.type || "string";
    }
};