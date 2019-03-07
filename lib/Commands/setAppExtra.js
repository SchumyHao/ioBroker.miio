"use strict";

const MiioCommand = require("./command");

module.exports = class SetAppExtra extends MiioCommand {
    constructor() {
        super("set_app_extra", {
            name: "set app extra",
            desc: "Storage register to enable extra features at the app",
            para: [{
                type: "number"
            }]
        });
    }
};