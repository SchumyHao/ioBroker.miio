"use strict";

const MiioProp = require("./property");

module.exports = class WorkMode extends MiioProp {
    constructor() {
        super("work_mode", {
            name: "work mode",
            desc: "Current work mode",
            type: "number",
            vtype: "string",
            obj: {
                0: "cold water",
                1: "warm water",
                2: "boil water",
            }
        });
    }
};
