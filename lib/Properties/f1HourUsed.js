"use strict";

const MiioProp = require("./property");

module.exports = class F1HourUsed extends MiioProp {
    constructor() {
        super("f1_hour_used", {
            name: "f1 hour used",
            desc: "How long the filter has been in use",
            type: "bumber"
        });
    }
};
