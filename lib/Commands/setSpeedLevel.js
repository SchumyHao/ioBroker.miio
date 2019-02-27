"use strict";

const MiioCommand = require("./command");

module.exports = class SetSpeedLevel extends MiioCommand {
    constructor() {
        super("set_speed_level", {
            name: "set speed level",
            desc: "Set speed of the direct mode",
            para: [{
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};