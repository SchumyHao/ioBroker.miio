"use strict";

const MiioProp = require("./property");

module.exports = class UseTime extends MiioProp {
    constructor() {
        super("use_time", {
            name: "use time",
            desc: "How long the device has been active in seconds",
            unit: "Seconds",
            type: "number"
        });
    }
};
