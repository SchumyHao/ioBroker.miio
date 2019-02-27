"use strict";

const MiioCommand = require("./command");

module.exports = class SetName extends MiioCommand {
    constructor() {
        super("set_name", {
            name: "set name",
            desc: "Set an internal name for the bulb",
            para: [{
                type: "string"
            }]
        });
    }
};