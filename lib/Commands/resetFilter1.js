"use strict";

const MiioCommand = require("./command");

module.exports = class ResetFilter1 extends MiioCommand {
    constructor() {
        super("reset_filter1", {
            name: "reset filter1",
            desc: "Resets filter hours used and remaining life"
        });
    }
};