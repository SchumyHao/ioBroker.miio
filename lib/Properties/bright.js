"use strict";

const MiioProp = require("./property");

module.exports = class Bright extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "bright", {
            name: "bright",
            desc: "Current brightness",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
