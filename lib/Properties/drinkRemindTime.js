"use strict";

const MiioProp = require("./property");

module.exports = class DrinkRemindTime extends MiioProp {
    constructor() {
        super("drink_remind_time", {
            name: "drink remind time",
            desc: "Drink reminder time duration",
            unit: "hours",
            type: "number"
        });
    }
};
