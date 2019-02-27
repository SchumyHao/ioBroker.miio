"use strict";

const MiioProp = require("./property");

module.exports = class FlushFlag extends MiioProp {
    constructor() {
        super("flush_flag", {
            name: "flush flag",
            desc: "",
            type: ""
        });
    }
};
