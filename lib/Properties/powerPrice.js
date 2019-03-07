"use strict";

const MiioProp = require("./property");

module.exports = class PowerPrice extends MiioProp {
    constructor() {
        super("power_price", {
            name: "power price",
            desc: "",
            type: ""
        });
    }
};
