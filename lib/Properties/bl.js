"use strict";

const MiioProp = require("./property");

module.exports = class Bl extends MiioProp {
    constructor() {
        super("bl", {
            name: "bl",
            desc: "Smart night mode state",
            type: "number"
        });
    }
};
