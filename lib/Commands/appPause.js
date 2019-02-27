"use strict";

const MiioCommand = require("./command");

module.exports = class AppPause extends MiioCommand {
    constructor() {
        super("app_pause", {
            name: "app pause",
            desc: "Pause cleaning"
        });
    }
};