"use strict";

const MiioProp = require("./property");

module.exports = class FHour extends MiioProp {
    constructor() {
        super("f_hour", {
            name: "f hour",
            desc: "",
            type: ""
        });
    }
};
