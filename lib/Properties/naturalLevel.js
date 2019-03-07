"use strict";

const MiioProp = require("./property");

module.exports = class NaturalLevel extends MiioProp {
    constructor() {
        super("natural_level", {
            name: "natural level",
            desc: "",
            type: ""
        });
    }
};
