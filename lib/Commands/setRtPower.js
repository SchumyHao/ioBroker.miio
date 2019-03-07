"use strict";

const MiioCommand = require("./command");

module.exports = class SetRtPower extends MiioCommand {
    constructor() {
        super("set_rt_power", {
            name: "set rt power",
            desc: "Set the realtime power on/off",
            para: [{
                type: "number"
            }]
        });
    }
};