"use strict";

const MiioProp = require("./property");

module.exports = class Tds extends MiioProp {
    constructor() {
        super("tds", {
            name: "tds",
            desc: "Water TDS",
            unit: "mg/L",
            type: "number"
        });
    }
};
