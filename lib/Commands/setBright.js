"use strict";

const MiioCommand = require("./command");

module.exports = class SetBright extends MiioCommand {
    constructor() {
        super("set_bright", {
            name: "set bright",
            desc: "Set brightness level",
            para: [{
                min: 0,
                max: 100,
                type: "number"
            }]
        });
    }
};