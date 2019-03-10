"use strict";

const MiioProp = require("./property");

module.exports = class State extends MiioProp {
    constructor() {
        super("state", {
            name: "state",
            desc: "",
            type: "string"
        });
    }
};
