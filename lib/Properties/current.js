"use strict";

const MiioProp = require("./property");

module.exports = class Current extends MiioProp {
    constructor() {
        super("current", {
            name: "current",
            desc: "Current value",
            unit: "A",
            type: "number"
        });
    }
};
