"use strict";

const MiioCommand = require("./command");

module.exports = class AppRcStart extends MiioCommand {
    constructor() {
        super("app_rc_start", {
            name: "app rc start",
            desc: "Start manual control mode"
        });
    }
};