"use strict";

const MiioProp = require("./property");

module.exports = class GetPower extends MiioProp {
    constructor() {
        super("get_power", {
            name: "get power",
            desc: "Get plug power",
            unit: "W",
            type: "number",
            mapper: v => v*0.01,
            cmd: "get_power"
        });
    }
};