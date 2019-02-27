"use strict";

const MiioCommand = require("./command");

module.exports = class TogglePlug extends MiioCommand {
    constructor() {
        super("toggle_plug", {
            name: "toggle plug",
            desc: "Socket power on/off",
            para: [{
                type: "string"
            }]
        });
    }
};