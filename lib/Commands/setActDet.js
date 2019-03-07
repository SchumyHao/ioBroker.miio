"use strict";

const MiioCommand = require("./command");

module.exports = class SetActDet extends MiioCommand {
    constructor() {
        super("set_act_det", {
            name: "set act det",
            desc: "Set auto detect on/off",
            para: [{
                type: "string"
            }]
        });
    }
};