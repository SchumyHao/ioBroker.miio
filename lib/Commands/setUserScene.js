"use strict";

const MiioCommand = require("./command");

module.exports = class SetScene extends MiioCommand {
    constructor() {
        super("set_user_scene", {
            name: "set user scene",
            desc: "Set one of the fixed eyecare user scenes",
            para: [{
                min: 1,
                max: 4,
                type: "number"
            }]
        });
    }
};