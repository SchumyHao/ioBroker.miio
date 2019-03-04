"use strict";

const MiioProp = require("./property");

module.exports = class Bright extends MiioProp {
    constructor() {
        super("bright", {
            name: "bright",
            desc: "Current brightness",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
