"use strict";

const MiioProp = require("./property");

module.exports = class Temperature extends MiioProp {
    constructor() {
        super("curr_tempe", {
            name: "curr tempe",
            desc: "Current input water temperature.",
            unit: "°C",
            type: "number"
        });
    }
};
