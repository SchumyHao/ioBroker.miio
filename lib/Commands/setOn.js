"use strict";

const MiioCommand = require("./command");

module.exports = class setOn extends MiioCommand {
    constructor() {
        super("set_on", {
            name: "set on",
            desc: "Power on"
        });
    }
};