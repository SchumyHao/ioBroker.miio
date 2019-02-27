"use strict";

const MiioCommand = require("./command");

module.exports = class AppRcMove extends MiioCommand {
    constructor() {
        super("app_rc_move", {
            name: "app rc move",
            desc: "Give a command over manual control interface",
            para: [{
                // this is a JSON string
                // {"omega": rotation,
                //  "velocity": velocity,
                //  "duration": duration,
                //  "seqnum": manual_seqnum}
                type: "string"
            }]
        });
    }
};