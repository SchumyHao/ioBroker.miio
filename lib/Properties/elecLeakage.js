"use strict";

const MiioProp = require("./property");

module.exports = class ElecLeakage extends MiioProp {
    constructor() {
        super("elec_leakage", {
            name: "elec leakage",
            desc: "The leakage current",
            type: "number"
        });
    }
};
