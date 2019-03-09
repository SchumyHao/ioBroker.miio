"use strict";

const MiioProp = require("./property");

module.exports = class TimeState extends MiioProp {
    constructor() {
        super("time_state", {
            name: "time state",
            desc: "Display a clock instead the AQI",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
