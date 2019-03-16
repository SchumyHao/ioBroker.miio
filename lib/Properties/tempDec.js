"use strict";

const MiioProp = require("./property");

module.exports = class TempDec extends MiioProp {
    constructor() {
        super("temp_dec", {
            name: "temp dec",
            desc: "Current temperature. Need divided by 10",
            unit: "°C",
            type: "number",
            mapper: v => v/10,
        });
    }
};
