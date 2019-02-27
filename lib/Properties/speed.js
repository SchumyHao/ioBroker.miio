"use strict";

const MiioProp = require("./property");

module.exports = class Speed extends MiioProp {
    constructor() {
        super("speed", {
            name: "speed",
            desc: "",
            type: ""
        });
    }
};
