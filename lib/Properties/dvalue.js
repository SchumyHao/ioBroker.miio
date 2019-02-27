"use strict";

const MiioProp = require("./property");

module.exports = class Dvalue extends MiioProp {
    constructor() {
        super("dvalue", {
            name: "dvalue",
            desc: "",
            type: ""
        });
    }
};
