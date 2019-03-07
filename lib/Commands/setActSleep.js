"use strict";

const MiioCommand = require("./command");

module.exports = class SetActSleep extends MiioCommand {
    constructor() {
        super("set_act_sleep", {
            name: "set act sleep",
            desc: "Set the Learn Mode on/off",
            para: [{
                type: "boolean",
                vtype: "string",
                obj: {
                    true: "single",
                    false: "close"
                }
            }]
        });
    }
};