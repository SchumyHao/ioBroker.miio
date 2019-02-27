"use strict";

const MiioProp = require("./property");

module.exports = class Power extends MiioProp {
    constructor() {
        super("power", {
            name: "power",
            desc: "",
            type: ""
        });
    }
};
