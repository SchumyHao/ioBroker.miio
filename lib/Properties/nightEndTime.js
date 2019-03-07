"use strict";

const MiioProp = require("./property");

module.exports = class NightEndTime extends MiioProp {
    constructor() {
        super("night_end_time", {
            name: "night end time",
            desc: "",
            type: ""
        });
    }
};
