"use strict";

const MiioProp = require("./property");

module.exports = class Filter1Life extends MiioProp {
    constructor() {
        super("filter1_life", {
            name: "filter1 life",
            desc: "Time until the filter should be changed",
            type: "number"
        });
    }
};
