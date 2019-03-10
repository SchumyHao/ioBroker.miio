"use strict";

const MiioCommand = require("./command");

module.exports = class SetAngleEnable extends MiioCommand {
    constructor() {
        super("set_angle_enable", {
            name: "set angle enable",
            desc: "Set oscillate on/off",
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