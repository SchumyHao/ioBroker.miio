"use strict";

const MiioCommand = require("./command");

module.exports = class SetDrinkRemindEnable extends MiioCommand {
    constructor() {
        super("set_drink_remind_enable", {
            name: "set drink remind enable",
            desc: "Set setup drink reminder",
            para: [{
                type: "boolean",
                vtype: "number",
                obj: {
                    true: 1,
                    false: 0
                }
            }]
        });
    }
};