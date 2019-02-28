"use strict";

const MiioProp = require("./property");

module.exports = class F1Hour extends MiioProp {
    constructor() {
        super("f1_hour", {
            name: "f1 hour",
            desc: "How long the filter remaining",
            type: "number"
        });
    }
};
