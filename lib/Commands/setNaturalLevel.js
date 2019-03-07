"use strict";

const MiioCommand = require("./command");

module.exports = class SetNaturalLevel extends MiioCommand {
    constructor() {
        super("set_natural_level", {
            name: "set natural level",
            desc: "Set natural level",
            para: [{
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};