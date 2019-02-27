"use strict";

const MiioProp = require("./property");

module.exports = class NightState extends MiioProp {
    constructor() {
        super("night_state", {
            name: "night state",
            desc: "",
            type: ""
        });
    }
};
