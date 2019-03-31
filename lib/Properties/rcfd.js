"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("rcfd", {
            name: "Rear active carbon filter",
            desc: "Rear active carbon filter",
            unit: "%",
            type: "number"
        });
    }
};
