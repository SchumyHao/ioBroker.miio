"use strict";

const MiioProp = require("./property");

module.exports = class ActSleep extends MiioProp {
    constructor() {
        super("act_sleep", {
            name: "act sleep",
            desc: "Learn mode state",
            type: "string",
            vtype: "boolean",
            obj: {
                single: true,
                close: false
            }
        });
    }
};
