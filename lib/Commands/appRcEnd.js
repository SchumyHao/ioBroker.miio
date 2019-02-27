"use strict";

const MiioCommand = require("./command");

module.exports = class AppRcEnd extends MiioCommand {
    constructor() {
        super("app_rc_end", {
            name: "app rc end",
            desc: "Stop manual control mode"
        });
    }
};