"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("pfp", {
            name: "PP cotton filter day",
            desc: "PP cotton filter day",
            unit: "days",
            type: "number"
        });
    }
};
