"use strict";

const MiioProp = require("./property");

module.exports = class Pow extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "pow", {
            name: "pow",
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