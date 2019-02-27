"use strict";

const MiioProp = require("./property");

module.exports = class Rgb extends MiioProp {
    constructor() {
        super("rgb", {
            name: "rgb",
            desc: "",
            type: ""
        });
    }
};
