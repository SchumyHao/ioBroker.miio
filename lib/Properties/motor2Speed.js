"use strict";

const MiioProp = require("./property");

module.exports = class Motor2Speed extends MiioProp {
    constructor() {
        super("motor2_speed", {
            name: "motor2 speed",
            desc: "Speed of the 2nd motor",
            type: "number"
        });
    }
};
