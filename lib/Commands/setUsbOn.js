"use strict";

const MiioCommand = require("./command");

module.exports = class setUsbOn extends MiioCommand {
    constructor() {
        super("set_usb_on", {
            name: "set usb on",
            desc: "USB Power on"
        });
    }
};