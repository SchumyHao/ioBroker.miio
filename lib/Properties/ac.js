"use strict";

const MiioProp = require("./property");

module.exports = class Ac extends MiioProp {
    constructor() {
        super("ac", {
            name: "ac",
            desc: "Automatic color temperature state",
            type: "number"
        });
    }
};
