"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("rcfp", {
            name: "Rear active carbon filter day",
            desc: "Rear active carbon filter day",
            unit: "days",
            type: "number"
        });
    }
};
