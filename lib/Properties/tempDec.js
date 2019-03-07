"use strict";

const MiioProp = require("./property");

module.exports = class TempDec extends MiioProp {
    constructor() {
        super("temp_dec", {
            name: "temp dec",
            desc: "",
            type: ""
        });
    }
};
