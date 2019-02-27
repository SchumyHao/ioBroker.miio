"use strict";

const MiioProp = require("./property");

module.exports = class TimeState extends MiioProp {
    constructor() {
        super("time_state", {
            name: "time state",
            desc: "",
            type: ""
        });
    }
};
