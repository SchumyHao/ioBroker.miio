"use strict";

const MiioProp = require("./property");

module.exports = class NightState extends MiioProp {
    constructor() {
        super("night_state", {
            name: "night state",
            desc: "Device current night mode state",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
