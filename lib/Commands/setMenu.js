"use strict";

const MiioCommand = require("./command");

module.exports = class SetMenu extends MiioCommand {
    constructor() {
        super("set_menu", {
            name: "set menu",
            desc: "Select one of the default(?) cooking profiles",
            para: [{
                //cooking profile
                type: "string"
            }]
        });
    }
};