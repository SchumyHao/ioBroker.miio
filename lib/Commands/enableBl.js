"use strict";

const MiioCommand = require("./command");

module.exports = class EnableBl extends MiioCommand {
    constructor() {
        super("enable_bl", {
            name: "enable bl",
            desc: "Set smart night light mode",
            para: [{
                type: "string"
            }]
        });
    }
};