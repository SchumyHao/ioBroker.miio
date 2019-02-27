"use strict";

const MiioCommand = require("./command");

module.exports = class appStart extends MiioCommand {
    constructor() {
        super("app_start", {
            name: "app start",
            desc: "Start cleaning"
        });
    }
};