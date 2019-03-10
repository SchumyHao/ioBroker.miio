"use strict";

const MiioProp = require("./property");

module.exports = class PowerConsumeRate extends MiioProp {
    constructor() {
        super("power_consume_rate", {
            name: "power consume rate",
            desc: "Current power load",
            unit: "kW",
            type: "number"
        });
    }
};
