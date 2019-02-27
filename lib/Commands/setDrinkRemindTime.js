"use strict";

const MiioCommand = require("./command");

module.exports = class SetDrinkRemindTime extends MiioCommand {
    constructor() {
        super("set_drink_remind_time", {
            name: "set drink remind time",
            desc: "Set setup drink reminder time",
            para: [{
                //hours
                type: "number"
            }]
        });
    }
};