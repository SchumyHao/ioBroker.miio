"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("pfd", {
            name: "PP cotton filter",
            desc: "PP cotton filter",
            unit: "%",
            type: "number"
        });
    }
};
