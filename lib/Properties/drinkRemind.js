"use strict";

const MiioProp = require("./property");

module.exports = class DrinkRemind extends MiioProp {
    constructor() {
        super("drink_remind", {
            name: "drink remind",
            desc: "Enable drink reminder",
            type: "number",
            vtype: "boolean",
            obj: {
                1: true,
                0: false
            }
        });
    }
};
