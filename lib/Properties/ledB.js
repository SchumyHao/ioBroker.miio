"use strict";

const MiioProp = require("./property");

module.exports = class LedB extends MiioProp {
    constructor() {
        super("led_b", {
            name: "led b",
            desc: "LED brightness",
            min: 0,
            max: 2,
            type: "number"
        });
    }
};
