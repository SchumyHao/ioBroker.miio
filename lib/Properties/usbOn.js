"use strict";

const MiioProp = require("./property");

module.exports = class UsbOn extends MiioProp {
    constructor() {
        super("usb_on", {
            name: "usb on",
            desc: "",
            type: ""
        });
    }
};
