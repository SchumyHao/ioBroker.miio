"use strict";

const MiioProp = require("./property");

module.exports = class Ct extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "ct", {
            name: "ct",
            desc: "Current color temperature",
            type: "number",
            min: 1700,
            max: 6500,
            unit: "K"
        });
    }
};
