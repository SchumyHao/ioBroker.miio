"use strict";

const MiioProp = require("./property");

module.exports = class Power extends MiioProp {
    constructor() {
        super("power", {
            name: "power",
            desc: "Current device power state",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};