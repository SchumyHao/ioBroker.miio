"use strict";

const MiioCommand = require("./command");

module.exports = class SetCct extends MiioCommand {
    constructor() {
        super("set_cct", {
            name: "set cct",
            desc: "Set Correlated Color Temperature",
            para: [{
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};