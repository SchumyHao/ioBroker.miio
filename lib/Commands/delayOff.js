"use strict";

const MiioCommand = require("./command");

module.exports = class DelayOff extends MiioCommand {
    constructor() {
        super("delay_off", {
            name: "delay off",
            desc: "Set delay off seconds",
            para: [{
                type: "number"
            }]
        });
    }
};