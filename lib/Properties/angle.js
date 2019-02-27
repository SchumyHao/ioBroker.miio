"use strict";

const MiioProp = require("./property");

module.exports = class Angle extends MiioProp {
    constructor() {
        super("angle", {
            name: "angle",
            desc: "Current angle",
            type: "number"
        });
    }
};
