"use strict";

const MiioCommand = require("./command");

module.exports = class SetPowerMode extends MiioCommand {
    constructor() {
        super("set_power_mode", {
            name: "set power mode",
            desc: "Set the power mode",
            para: [{
                type: "string",
                enum: [
                    "green",
                    "normal"
                ]
            }]
        });
    }
};