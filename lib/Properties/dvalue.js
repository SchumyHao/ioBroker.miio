"use strict";

const MiioProp = require("./property");

module.exports = class Dvalue extends MiioProp {
    constructor() {
        super("dvalue", {
            name: "dvalue",
            desc: "Countdown until turning off in minutes",
            type: "number"
        });
    }
};
