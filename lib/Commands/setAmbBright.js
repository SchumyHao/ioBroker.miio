"use strict";

const MiioCommand = require("./command");

module.exports = class SetAmbBright extends MiioCommand {
    constructor() {
        super("set_amb_bright", {
            name: "set amb bright",
            desc: "Set the brightness of the ambient light",
            para: [{
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};