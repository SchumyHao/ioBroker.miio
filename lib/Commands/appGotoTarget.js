"use strict";

const MiioCommand = require("./command");

module.exports = class appGotoTarget extends MiioCommand {
    constructor() {
        super("app_goto_target", {
            name: "app goto target",
            desc: "Go to specific target",
            para: [{
                //x_coord
                type: "number"
            },{
                //y_coord
                type: "number"
            }]
        });
    }
};