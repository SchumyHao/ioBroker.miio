"use strict";

const MiioProp = require("./property");

module.exports = class Ambstatus extends MiioProp {
    constructor() {
        super("ambstatus", {
            name: "ambstatus",
            desc: "Ambient light state",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
