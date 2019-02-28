"use strict";

const MiioProp = require("./property");

module.exports = class ElecvalState extends MiioProp {
    constructor() {
        super("elecval_state", {
            name: "elecval state",
            desc: "Current valve state",
            type: "string"
        });
    }
};
