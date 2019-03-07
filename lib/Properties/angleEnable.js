"use strict";

const MiioProp = require("./property");

module.exports = class AngleEnable extends MiioProp {
    constructor() {
        super("angle_enable", {
            name: "angle enable",
            desc: "Oscillation state",
            type: "string"
        });
    }
};
