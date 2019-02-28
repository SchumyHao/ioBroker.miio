"use strict";

const MiioProp = require("./property");

module.exports = class Ct extends MiioProp {
    constructor() {
        super("ct", {
            name: "ct",
            desc: "Current color temperature",
            type: "string"
        });
    }
};
