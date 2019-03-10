"use strict";

const MiioProp = require("./property");

module.exports = class Temperature extends MiioProp {
    constructor() {
        super("temperature", {
            name: "temperature",
            desc: "Current temperature.",
            unit: "°C",
            type: "number"
        });
    }
};
