"use strict";

const MiioCommand = require("./command");

module.exports = class SetEyecare extends MiioCommand {
    constructor() {
        super("set_eyecare", {
            name: "set eyecare",
            desc: "Set eyecare mode on/off",
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