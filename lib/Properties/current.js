"use strict";

const MiioProp = require("./property");

module.exports = class Current extends MiioProp {
    constructor() {
        super("current", {
            name: "current",
            desc: "",
            type: ""
        });
    }
};
