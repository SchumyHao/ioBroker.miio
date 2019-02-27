"use strict";

const MiioCommand = require("./command");

module.exports = class appSpot extends MiioCommand {
    constructor() {
        super("app_spot", {
            name: "app spot",
            desc: "Start spot cleaning"
        });
    }
};