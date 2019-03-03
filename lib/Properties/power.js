"use strict";

const MiioProp = require("./property");

module.exports = class Power extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "power", {
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