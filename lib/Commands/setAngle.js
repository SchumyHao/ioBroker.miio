"use strict";

const MiioCommand = require("./command");

module.exports = class SetAngle extends MiioCommand {
    constructor() {
        super("set_angle", {
            name: "set angle",
            desc: "Set the oscillation angle",
            para: [{
                min: 0,
                max: 120,
                type: "number"
            }]
        });
    }
};