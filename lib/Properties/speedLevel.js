"use strict";

const MiioProp = require("./property");

module.exports = class SpeedLevel extends MiioProp {
    constructor() {
        super("speed_level", {
            name: "speed level",
            desc: "",
            type: ""
        });
    }
};
