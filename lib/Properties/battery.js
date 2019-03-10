"use strict";

const MiioProp = require("./property");

module.exports = class Battery extends MiioProp {
    constructor() {
        super("battery", {
            name: "battery",
            desc: "Current battery level",
            unit: "%",
            type: "number"
        });
    }
};
