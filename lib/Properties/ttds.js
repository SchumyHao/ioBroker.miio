"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("ttds", {
            name: "Tap water",
            desc: "Tap water",
            unit: "TDS",
            type: "number"
        });
    }
};
