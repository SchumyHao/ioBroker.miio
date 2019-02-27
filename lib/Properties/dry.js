"use strict";

const MiioProp = require("./property");

module.exports = class Dry extends MiioProp {
    constructor() {
        super("dry", {
            name: "dry",
            desc: "",
            type: ""
        });
    }
};
