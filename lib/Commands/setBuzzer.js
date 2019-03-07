"use strict";

const MiioCommand = require("./command");

module.exports = class SetBuzzer extends MiioCommand {
    constructor() {
        super("set_buzzer", {
            name: "set buzzer",
            desc: "Set buzzer on/off",
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