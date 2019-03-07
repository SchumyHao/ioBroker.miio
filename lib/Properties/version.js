"use strict";

const MiioProp = require("./property");

module.exports = class Version extends MiioProp {
    constructor() {
        super("version", {
            name: "version",
            desc: "",
            type: ""
        });
    }
};
