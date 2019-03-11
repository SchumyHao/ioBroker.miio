"use strict";

const MiioProp = require("./property");

module.exports = class SetupTempe extends MiioProp {
    constructor() {
        super("setup_tempe", {
            name: "setup tempe",
            desc: "Output water temperature",
            unit: "°C",
            type: "number"
        });
    }
};
