"use strict";

const MiioProp = require("./property");

module.exports = class UsbState extends MiioProp {
    constructor() {
        super("usb_state", {
            name: "usb state",
            desc: "Device's usb connection state",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
