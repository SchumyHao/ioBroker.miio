"use strict";

const MiioCommand = require("./command");

module.exports = class appCharge extends MiioCommand {
    constructor() {
        super("app_charge", {
            name: "app charge",
            desc: "go home?"
        });
    }
};