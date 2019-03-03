"use strict";

const MiioProp = require("./property");

module.exports = class Rgb extends MiioProp {
    constructor(miioDev) {
        super(miioDev, "rgb", {
            name: "rgb",
            desc: "color in RGB",
            type: "number"
        });
    }
};
