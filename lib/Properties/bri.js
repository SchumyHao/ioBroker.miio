"use strict";

const MiioProp = require("./property");

module.exports = class Bri extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "bri", {
            name: "bri",
            desc: "Current brightness",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
