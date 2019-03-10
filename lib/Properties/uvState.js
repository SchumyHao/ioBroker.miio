"use strict";

const MiioProp = require("./property");

module.exports = class UvState extends MiioProp {
    constructor() {
        super("uv_state", {
            name: "uv state",
            desc: "",
            type: "string"
        });
    }
};
