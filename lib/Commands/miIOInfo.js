"use strict";

const MiioCommand = require("./command");

module.exports = class MiIOInfo extends MiioCommand {
    constructor() {
        super("miIO.info", {
            name: "miIO info",
            desc: "Get miIO protocol information from the device"
        });
    }
};