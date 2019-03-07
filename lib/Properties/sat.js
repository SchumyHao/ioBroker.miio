"use strict";

const MiioProp = require("./property");

module.exports = class Sat extends MiioProp {
    constructor() {
        super("sat", {
            name: "sat",
            desc: "",
            type: ""
        });
    }
};
