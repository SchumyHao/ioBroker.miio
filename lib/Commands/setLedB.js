"use strict";

const MiioCommand = require("./command");

module.exports = class SetLedB extends MiioCommand {
    constructor() {
        super("set_led_b", {
            name: "set led b",
            desc: "Set led brightness",
            para: [{
                type: "number"
            }]
        });
    }
};