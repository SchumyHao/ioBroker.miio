"use strict";

const MiioProp = require("./property");

module.exports = class DrinkTimeCount extends MiioProp {
    constructor() {
        super("drink_time_count", {
            name: "drink time count",
            desc: "Last drink time count",
            unit: "hours",
            type: "number"
        });
    }
};
