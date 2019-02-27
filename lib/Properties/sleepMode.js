"use strict";

const MiioProp = require("./property");

module.exports = class SleepMode extends MiioProp {
    constructor() {
        super("sleep_mode", {
            name: "sleep mode",
            desc: "",
            type: ""
        });
    }
};
