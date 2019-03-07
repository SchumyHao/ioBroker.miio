"use strict";

const MiioCommand = require("./command");

module.exports = class SetBricct extends MiioCommand {
    constructor() {
        super("set_bricct", {
            name: "set bricct",
            desc: "Set brightness level and the correlated color temperature",
            para: [{
                //brightness
                min: 1,
                max: 100,
                type: "number"
            },{
                //cct
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};