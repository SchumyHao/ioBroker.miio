"use strict";

const MiioProp = require("./property");

module.exports = class UsbState extends MiioProp {
    constructor() {
        super("usb_state", {
            name: "usb state",
            desc: "",
            type: ""
        });
    }
};
