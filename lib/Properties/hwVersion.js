"use strict";

const MiioProp = require("./property");

module.exports = class HwVersion extends MiioProp {
    constructor() {
        super("hw_version", {
            name: "hw version",
            desc: "The hardware version",
            type: "number"
        });
    }
};
