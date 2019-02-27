"use strict";

const MiioProp = require("./property");

module.exports = class PowerFactor extends MiioProp {
    constructor() {
        super("power_factor", {
            name: "power factor",
            desc: "",
            type: ""
        });
    }
};
