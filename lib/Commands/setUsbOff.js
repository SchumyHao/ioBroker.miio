"use strict";

const MiioCommand = require("./command");

module.exports = class setUsbOff extends MiioCommand {
    constructor() {
        super("set_usb_off", {
            name: "set usb off",
            desc: "USB Power off"
        });
    }
};