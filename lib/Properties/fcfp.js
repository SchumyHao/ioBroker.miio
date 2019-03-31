"use strict";

const MiioProp = require("./property");

module.exports = class FilterLife extends MiioProp {
    constructor() {
        super("fcfp", {
            name: "Front active carbon filter day",
            desc: "Front active carbon filter day",
            unit: "days",
            type: "number"
        });
    }
};
