"use strict";

const MiioProp = require("./property");

module.exports = class Level extends MiioProp {
    constructor() {
        super("level", {
            name: "level",
            desc: "",
            type: "number"
        });
    }
};
