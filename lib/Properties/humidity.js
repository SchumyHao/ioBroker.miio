"use strict";

const MiioProp = require("./property");

module.exports = class Humidity extends MiioProp {
    constructor() {
        super("humidity", {
            name: "humidity",
            desc: "Current humidity",
            type: "number"
        });
    }
};
