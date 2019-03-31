"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("fcfd", {
            name: "Front active carbon filter",
            desc: "Front active carbon filter",
            unit: "%",
            type: "number"
        });
    }
};
