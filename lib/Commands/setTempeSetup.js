"use strict";

const MiioCommand = require("./command");

module.exports = class SetTempeSetup extends MiioCommand {
    constructor() {
        super("set_tempe_setup", {
            name: "set tempe setup",
            desc: "Set setup temperature",
            para: [{
                min: 1,
                max: 100,
                unit: "°C",
                type: "number"
            }]
        });
    }
};