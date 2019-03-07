"use strict";

const MiioProp = require("./property");

module.exports = class Usage extends MiioProp {
    constructor() {
        super("usage", {
            name: "usage",
            desc: "",
            type: ""
        });
    }
};
