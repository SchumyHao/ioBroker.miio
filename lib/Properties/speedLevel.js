"use strict";

const MiioProp = require("./property");

module.exports = class SpeedLevel extends MiioProp {
    constructor() {
        super("speed_level", {
            name: "speed level",
            desc: "Set speed level",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
