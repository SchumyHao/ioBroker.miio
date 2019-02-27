"use strict";

const MiioCommand = require("./command");

module.exports = class SetPowerPrice extends MiioCommand {
    constructor() {
        super("set_power_price", {
            name: "set power price",
            desc: "Set the power price",
            para: [{
                min: 0,
                max: 999,
                type: "number"
            }]
        });
    }
};