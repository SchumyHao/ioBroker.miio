"use strict";

const MiioCommand = require("./command");

module.exports = class SetDefault extends MiioCommand {
    constructor() {
        super("set_default", {
            name: "set default",
            desc: "Set current state as default"
        });
    }
};