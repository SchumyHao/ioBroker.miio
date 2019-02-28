"use strict";

const MiioProp = require("./property");

module.exports = class Co2 extends MiioProp {
    constructor() {
        super("co2", {
            name: "co2",
            desc: "Carbon dioxide",
            type: "number"
        });
    }
};
