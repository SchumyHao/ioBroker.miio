"use strict";

const MiioProp = require("./property");

module.exports = class ColorMode extends MiioProp {
    constructor() {
        super("color_mode", {
            name: "color mode",
            desc: "",
            type: ""
        });
    }
};
