"use strict";

const MiioCommand = require("./command");

module.exports = class AppStart extends MiioCommand {
    constructor() {
        super("app_start", {
            name: "app start",
            desc: "Start cleaning"
        });
    }
};