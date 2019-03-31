"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("ftds", {
            name: "Filtered water",
            desc: "Filtered water",
            unit: "TDS",
            type: "number"
        });
    }
};
