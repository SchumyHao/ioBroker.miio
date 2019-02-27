"use strict";

const MiioCommand = require("./command");

module.exports = class getTempHistory extends MiioCommand {
    constructor() {
        super("get_temp_history", {
            name: "get temp history",
            desc: "Retrieves a temperature history",
            returnType: "object"
        });
    }
};