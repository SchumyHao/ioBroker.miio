"use strict";

const MiioCommand = require("./command");

module.exports = class SetRgb extends MiioCommand {
    constructor(miioDev) {
        super(miioDev, "set_rgb", {
            name: "set rgb",
            desc: "Set color in RGB",
            para: [{
                type: "number"
            }]
        });
    }
};