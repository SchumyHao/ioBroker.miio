"use strict";

const MiioCommand = require("./command");

module.exports = class SetPower extends MiioCommand {
    constructor(miioDev) {
        super(miioDev, "set_power", {
            name: "set power",
            desc: "Set power on/off",
            para: [{
                type: "boolean",
                vtype: "string",
                obj: {
                    true: "on",
                    false: "off"
                }
            }]
        });
    }
};