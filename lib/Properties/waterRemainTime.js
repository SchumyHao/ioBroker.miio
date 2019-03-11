"use strict";

const MiioProp = require("./property");

module.exports = class WaterRemainTime extends MiioProp {
    constructor() {
        super("water_remain_time", {
            name: "water remain time",
            desc: "Water Storage Time",
            unit: "Hours",
            type: "number"
        });
    }
};
