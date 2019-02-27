"use strict";

const MiioProp = require("./property");

module.exports = class Hue extends MiioProp {
    constructor() {
        super("hue", {
            name: "hue",
            desc: "",
            type: ""
        });
    }
};
