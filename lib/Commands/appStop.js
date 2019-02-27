"use strict";

const MiioCommand = require("./command");

module.exports = class appStop extends MiioCommand {
    constructor() {
        super("app_stop", {
            name: "app stop",
            desc: "Stop cleaning"
        });
    }
};