"use strict";

const MiioCommand = require("./command");
const SetUsbOn = require("./setUsbOn");
const SetUsbOff = require("./setUsbOff");

module.exports = class setOn extends MiioCommand {
    constructor() {
        super("CommandInPara", {
            name: "set usb power for chuangmi.plug.v3",
            desc: "set usb power for chuangmi.plug.v3",
            para: [{
                type: "boolean",
                obj: {
                    true: new SetUsbOn(),
                    false: new SetUsbOff()
                }
            }]
        });
    }
};