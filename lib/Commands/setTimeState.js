"use strict";

const MiioCommand = require("./command");

module.exports = class SetTimeState extends MiioCommand {
    constructor() {
        super("set_time_state", {
            name: "set time state",
            desc: "Enable/disable displaying a clock instead the AQI",
            para: [{
                type: "string"
            }]
        });
    }
};