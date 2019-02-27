"use strict";

const MiioProp = require("./property");

module.exports = class Life extends MiioProp {
    constructor() {
        super("life", {
            name: "life",
            desc: "",
            type: ""
        });
    }
};
