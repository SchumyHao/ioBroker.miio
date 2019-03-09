"use strict";

const MiioProp = require("./property");

module.exports = class PowerPrice extends MiioProp {
    constructor() {
        super("power_price", {
            name: "power price",
            desc: "The stored power price",
            min: 0,
            max: 999,
            unit: "/kwh",
            type: "number"
        });
    }
};
