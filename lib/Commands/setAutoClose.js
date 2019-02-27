"use strict";

const MiioCommand = require("./command");

module.exports = class SetAutoClose extends MiioCommand {
    constructor() {
        super("set_auto_close", {
            name: "set auto close",
            desc: "Purpose unknown",
            para: [{
                type: "string"
            }]
        });
    }
};