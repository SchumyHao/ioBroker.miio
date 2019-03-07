"use strict";

const MiioProp = require("./property");

module.exports = class SensorState extends MiioProp {
    constructor() {
        super("sensor_state", {
            name: "sensor state",
            desc: "",
            type: ""
        });
    }
};
