"use strict";

const MiioCommand = require("./command");

module.exports = class SetBright extends MiioCommand {
    constructor(miioDev) {
        super(miioDev, "set_bright", {
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