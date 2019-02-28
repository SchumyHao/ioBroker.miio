"use strict";

const MiioProp = require("./property");

module.exports = class Motor1Speed extends MiioProp {
    constructor() {
        super("motor1_speed", {
            name: "motor1 speed",
            desc: "Speed of the motor",
            type: "number"
        });
    }
};
