"use strict";

const MiioProp = require("./property");

module.exports = class FilterState extends MiioProp {
    constructor() {
        super("filter_state", {
            name: "filter state",
            desc: "",
            type: "number"
        });
    }
};
