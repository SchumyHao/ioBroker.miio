"use strict";

const MiioProp = require("./property");

module.exports = class UvLife extends MiioProp {
    constructor() {
        super("uv_life", {
            name: "uv life",
            desc: "",
            unit: "days",
            type: "number"
        });
    }
};
