"use strict";

const MiioProp = require("./property");

module.exports = class Name extends MiioProp {
    constructor() {
        super("name", {
            name: "name",
            desc: "",
            type: ""
        });
    }
};
