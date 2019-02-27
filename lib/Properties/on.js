"use strict";

const MiioProp = require("./property");

module.exports = class On extends MiioProp {
    constructor() {
        super("on", {
            name: "on",
            desc: "",
            type: ""
        });
    }
};
