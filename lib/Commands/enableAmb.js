"use strict";

const MiioCommand = require("./command");

module.exports = class EnableAmb extends MiioCommand {
    constructor() {
        super("enable_amb", {
            name: "enable amb",
            desc: "Set ambient light",
            para: [{
                type: "string"
            }]
        });
    }
};