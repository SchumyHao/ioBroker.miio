"use strict";

const MiioProp = require("./property");

module.exports = class Temp extends MiioProp {
    constructor() {
        super("temp", {
            name: "temp",
            desc: "",
            type: ""
        });
    }
};
