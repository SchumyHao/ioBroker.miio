"use strict";

const MiioCommand = require("./command");

module.exports = class setOff extends MiioCommand {
    constructor() {
        super("set_off", {
            name: "set off",
            desc: "Power off"
        });
    }
};