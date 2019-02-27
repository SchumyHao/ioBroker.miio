"use strict";

const MiioCommand = require("./command");

module.exports = class SetRgb extends MiioCommand {
    constructor() {
        super("set_rgb", {
            name: "set rgb",
            desc: "Set color in RGB",
            para: [{
                type: "number"
            }]
        });
    }
};