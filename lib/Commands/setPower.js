"use strict";

const MiioCommand = require("./command");

module.exports = class SetPower extends MiioCommand {
    constructor() {
        super("set_power", {
            name: "set power",
            desc: "Set power on/off",
            para: [{
                type: "string"
            }]
        });
    }
};