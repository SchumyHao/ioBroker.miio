"use strict";

const MiioProp = require("./property");

module.exports = class Pow extends MiioProp {
    constructor() {
        super("pow", {
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