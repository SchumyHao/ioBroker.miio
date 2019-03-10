"use strict";

const MiioCommand = require("./command");

module.exports = class SetDrinkRemindTime extends MiioCommand {
    constructor() {
        super("set_drink_remind_time", {
            name: "set drink remind time",
            desc: "Set setup drink reminder time",
            para: [{
                //hours
                unit: "hours",
                enum: [0, 1, 2, 3, 4, 6, 8, 10, 12],
                type: "number"
            }]
        });
    }
};