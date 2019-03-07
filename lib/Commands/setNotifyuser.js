"use strict";

const MiioCommand = require("./command");

module.exports = class SetNotifyuser extends MiioCommand {
    constructor() {
        super("set_notifyuser", {
            name: "set notifyuser",
            desc: "Set eye fatigue reminder",
            para: [{
                type: "string"
            }]
        });
    }
};