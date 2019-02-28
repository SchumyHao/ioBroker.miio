"use strict";

const MiioProp = require("./property");

module.exports = class Dv extends MiioProp {
    constructor() {
        super("dv", {
            name: "dv",
            desc: "Countdown until turning off in seconds",
            type: "number"
        });
    }
};
