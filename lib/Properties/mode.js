"use strict";

const MiioProp = require("./property");

module.exports = class Mode extends MiioProp {
    constructor() {
        super("mode", {
            name: "mode",
            desc: "Current operation mode",
            type: "string"
        });
    }
};
