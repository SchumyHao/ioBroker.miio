"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("rfp", {
            name: "RO filter day",
            desc: "RO filter day",
            unit: "days",
            type: "number"
        });
    }
};
