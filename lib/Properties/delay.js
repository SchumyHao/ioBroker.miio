"use strict";

const MiioProp = require("./property");

module.exports = class Delay extends MiioProp {
    constructor() {
        super("delay", {
            name: "delay",
            desc: "Interaction timeouts",
            type: "string"
        });
    }
};
