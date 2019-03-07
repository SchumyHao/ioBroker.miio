"use strict";

const MiioCommand = require("./command");

module.exports = class SetHsv extends MiioCommand {
    constructor() {
        super("set_hsv", {
            name: "set hsv",
            desc: "Set color in HSV",
            para: [{
                type: "number"
            }]
        });
    }
};