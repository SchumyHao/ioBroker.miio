"use strict";

const MiioProp = require("./property");

module.exports = class AverageAqi extends MiioProp {
    constructor() {
        super("average_aqi", {
            name: "average aqi",
            desc: "Average of the air quality index",
            type: "number"
        });
    }
};
