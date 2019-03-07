"use strict";

const MiioCommand = require("./command");

module.exports = class SetLimitHum extends MiioCommand {
    constructor() {
        super("set_limit_hum", {
            name: "set limit hum",
            desc: "Set the target humidity",
            para: [{
                type: "number",
                enum: [30, 40, 50, 60, 70, 80]
            }]
        });
    }
};