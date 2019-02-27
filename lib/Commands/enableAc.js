"use strict";

const MiioCommand = require("./command");

module.exports = class EnableAc extends MiioCommand {
    constructor() {
        super("enable_ac", {
            name: "enable ac",
            desc: "Set Automatic color temperature",
            para: [{
                type: "number"
            }]
        });
    }
};