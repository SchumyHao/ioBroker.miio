"use strict";

const MiioCommand = require("./command");

module.exports = class GetPower extends MiioCommand {
    constructor() {
        super("get_power", {
            name: "get power",
            desc: "Return plug power",
            returnType: "number"
        });
    }
};