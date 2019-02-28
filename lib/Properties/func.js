"use strict";

const MiioProp = require("./property");

module.exports = class Func extends MiioProp {
    constructor() {
        super("func", {
            name: "func",
            desc: "Current operation mode",
            type: "string"
        });
    }
};
