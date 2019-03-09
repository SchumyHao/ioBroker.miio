"use strict";

const MiioCommand = require("./command");

module.exports = class SetPoweroffTime extends MiioCommand {
    constructor() {
        super("set_poweroff_time", {
            name: "set poweroff time",
            desc: "Set delay off seconds",
            para: [{
                min: 1,
                unit: "secs",
                type: "number"
            }]
        });
    }
};