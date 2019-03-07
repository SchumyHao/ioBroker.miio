"use strict";

const MiioProp = require("./property");

module.exports = class Cct extends MiioProp {
    constructor() {
        super("cct", {
            name: "cct",
            desc: "Current color temperature",
            type: "number",
            min: 1,
            max: 100,
            unit: "%"
        });
    }
};
