"use strict";

const MiioCommand = require("./command");

module.exports = class SetInteraction extends MiioCommand {
    constructor() {
        super("set_interaction", {
            name: "set interaction",
            desc: "Set interaction. Supported by all cookers except MODEL_PRESS1",
            para: [{
                //settings
                type: "string"
            },{
                //timeouts led_off
                type: "string"
            },{
                //timeouts lid_open
                type: "string"
            },{
                //timeouts lid_open_warning
                type: "string"
            }]
        });
    }
};