"use strict";

const MiioProp = require("./property");

module.exports = class Filter extends MiioProp {
    constructor() {
        super("filter", {
            name: "filter",
            desc: "",
            type: ""
        });
    }
};
