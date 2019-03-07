"use strict";

const MiioProp = require("./property");

module.exports = class Bright extends MiioProp {
    constructor() {
        super("bright", {
            name: "bright",
            desc: "Environment illuminance level",
            min: 0,
            max: 200,
            unit: "lux",
            type: "number"
        });
    }
};
