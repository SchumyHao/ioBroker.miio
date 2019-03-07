"use strict";

const MiioCommand = require("./command");

module.exports = class SetLedLevel extends MiioCommand {
    constructor() {
        super("set_led_level", {
            name: "set led level",
            desc: "Set led brightness",
            para: [{
                type: "number"
            }]
        });
    }
};