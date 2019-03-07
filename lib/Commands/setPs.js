"use strict";

const MiioCommand = require("./command");

module.exports = class SetPs extends MiioCommand {
    constructor() {
        super("set_ps", {
            name: "set ps",
            desc: "Turn more function on/off",
            para: [{
                type: "string",
                enum: [
                    "cfg_lan_ctrl",     //developer mode
                    "cfg_save_state"    //saving the state on changes
                ],
                default: "cfg_save_state"
            },{
                type: "boolean",
                vtype: "string",
                obj: {
                    true: "1",
                    false: "0"
                }
            }]
        });
    }
};