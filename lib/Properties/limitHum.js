"use strict";

const MiioProp = require("./property");

module.exports = class LimitHum extends MiioProp {
    constructor() {
        super("limit_hum", {
            name: "limit hum",
            desc: "Target humidity",
            type: "number",
            enum: [30, 40, 50, 60, 70, 80]
        });
    }
};
