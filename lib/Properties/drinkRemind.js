"use strict";

const MiioProp = require("./property");

module.exports = class DrinkRemind extends MiioProp {
    constructor() {
        super("drink_remind", {
            name: "drink remind",
            desc: "",
            type: ""
        });
    }
};
