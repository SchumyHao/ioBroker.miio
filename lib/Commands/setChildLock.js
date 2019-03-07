"use strict";

const MiioCommand = require("./command");

module.exports = class SetChildLock extends MiioCommand {
    constructor() {
        super("set_child_lock", {
            name: "set child lock",
            desc: "Set child lock on/off",
            para: [{
                type: "string"
            }]
        });
    }
};