"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("filter_life", {
            name: "filter life",
            desc: "Time until the filter should be changed",
            unit: "days",
            type: "number"
        });
    }
};
