"use strict";

const MiioCommand = require("./command");

module.exports = class ApplyFixedScene extends MiioCommand {
    constructor() {
        super("apply_fixed_scene", {
            name: "apply fixed scene",
            desc: "Set scene number",
            para: [{
                type: "number"
            }]
        });
    }
};