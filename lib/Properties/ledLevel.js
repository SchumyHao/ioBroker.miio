"use strict";

const MiioProp = require("./property");

module.exports = class LedLevel extends MiioProp {
    constructor() {
        super("led_level", {
            name: "led level",
            desc: "",
            type: ""
        });
    }
};
