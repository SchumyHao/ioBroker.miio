"use strict";

const MiioProp = require("./property");

module.exports = class F1HourUsed extends MiioProp {
    constructor() {
        super("f1_hour_used", {
            name: "f1 hour used",
            desc: "",
            type: ""
        });
    }
};
