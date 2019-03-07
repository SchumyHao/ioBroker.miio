"use strict";

const MiioCommand = require("./command");

module.exports = class SetDry extends MiioCommand {
    constructor() {
        super("set_dry", {
            name: "set dry",
            desc: "Set dry mode on/off",
            para: [{
                type: "string"
            }]
        });
    }
};