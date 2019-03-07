"use strict";

const MiioProp = require("./property");

module.exports = class SleepTime extends MiioProp {
    constructor() {
        super("sleep_time", {
            name: "sleep time",
            desc: "",
            type: ""
        });
    }
};
