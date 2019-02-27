"use strict";

const MiioCommand = require("./command");

module.exports = class SetVolume extends MiioCommand {
    constructor() {
        super("set_volume", {
            name: "set volume",
            desc: "Set volume of sound notifications",
            para: [{
                min: 0,
                max: 100,
                type: "number"
            }]
        });
    }
};