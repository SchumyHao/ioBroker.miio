"use strict";

const MiioCommand = require("./command");

module.exports = class SetMode extends MiioCommand {
    constructor() {
        super("set_mode", {
            name: "set mode",
            desc: "Set mode",
            para: [{
                type: "number"
            }]
        });
    }
};