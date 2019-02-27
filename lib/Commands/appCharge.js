"use strict";

const MiioCommand = require("./command");

module.exports = class AppCharge extends MiioCommand {
    constructor() {
        super("app_charge", {
            name: "app charge",
            desc: "go home?"
        });
    }
};