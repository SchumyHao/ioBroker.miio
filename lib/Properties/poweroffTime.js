"use strict";

const MiioProp = require("./property");

module.exports = class PoweroffTime extends MiioProp {
    constructor() {
        super("poweroff_time", {
            name: "poweroff time",
            desc: "Countdown until turning off in seconds",
            unit: "secs",
            type: "number"
        });
    }
};
