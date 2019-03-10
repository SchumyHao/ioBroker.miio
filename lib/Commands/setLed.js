"use strict";

const MiioCommand = require("./command");

module.exports = class SetLed extends MiioCommand {
    constructor() {
        super("set_led", {
            name: "set led",
            desc: "Turn led on/off",
            para: [{
                type: "boolean",
                vtype: "string",
                obj: {
                    true: "on",
                    false: "off"
                }
            }]
        });
    }
};