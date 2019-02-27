"use strict";

const MiioCommand = require("./command");

module.exports = class SetScene extends MiioCommand {
    constructor() {
        super("set_scene", {
            name: "set scene",
            desc: "Set scene number",
            para: [{
                min: 1,
                max: 6,
                type: "number"
            }]
        });
    }
};