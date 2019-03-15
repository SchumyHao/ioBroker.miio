"use strict";

const MiioCommand = require("./command");
const SetOn = require("./setOn");
const SetOff = require("./setOff");

module.exports = class setOn extends MiioCommand {
    constructor() {
        super("CommandInPara", {
            name: "set power for chuangmi.plug.v3",
            desc: "set power for chuangmi.plug.v3",
            para: [{
                type: "boolean",
                obj: {
                    true: new SetOn(),
                    false: new SetOff()
                }
            }]
        });
    }
};