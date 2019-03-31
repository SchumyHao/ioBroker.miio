"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("rfd", {
            name: "RO filter",
            desc: "RO filter",
            unit: "%",
            type: "number"
        });
    }
};
