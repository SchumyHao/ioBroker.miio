"use strict";

const MiioProp = require("./property");

module.exports = class LimitHum extends MiioProp {
    constructor() {
        super("limit_hum", {
            name: "limit hum",
            desc: "",
            type: ""
        });
    }
};
