"use strict";

const MiioCommand = require("./command");

module.exports = class AppStop extends MiioCommand {
    constructor() {
        super("app_stop", {
            name: "app stop",
            desc: "Stop cleaning"
        });
    }
};