"use strict";

const MiioCommand = require("./command");

module.exports = class SetNightState extends MiioCommand {
    constructor() {
        super("set_night_state", {
            name: "set night state",
            desc: "Decrease the brightness of the display",
            para: [{
                type: "string"
            }]
        });
    }
};