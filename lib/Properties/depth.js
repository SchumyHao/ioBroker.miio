"use strict";

const MiioProp = require("./property");

module.exports = class Depth extends MiioProp {
    constructor() {
        super("depth", {
            name: "depth",
            desc: "The remaining amount of water in percent",
            type: "number"
        });
    }
};
