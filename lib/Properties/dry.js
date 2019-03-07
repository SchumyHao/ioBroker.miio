"use strict";

const MiioProp = require("./property");

module.exports = class Dry extends MiioProp {
    constructor() {
        super("dry", {
            name: "dry",
            desc: "Dry mode: The amount of water is not enough to continue to work for about 8 hours.",
            type: "string"
        });
    }
};
