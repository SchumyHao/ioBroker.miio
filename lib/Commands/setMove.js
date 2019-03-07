"use strict";

const MiioCommand = require("./command");

module.exports = class SetMove extends MiioCommand {
    constructor() {
        super("set_move", {
            name: "set move",
            desc: "Rotate the fan by -5/+5 degrees left/right",
            para: [{
                type: "string",
                enum: [
                    "left",
                    "right"
                ]
            }]
        });
    }
};