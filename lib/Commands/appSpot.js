"use strict";

const MiioCommand = require("./command");

module.exports = class AppSpot extends MiioCommand {
    constructor() {
        super("app_spot", {
            name: "app spot",
            desc: "Start spot cleaning"
        });
    }
};