"use strict";

const MiioProp = require("./property");

module.exports = class FlushTime extends MiioProp {
    constructor() {
        super("flush_time", {
            name: "flush time",
            desc: "",
            type: ""
        });
    }
};
