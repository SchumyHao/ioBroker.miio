"use strict";

const MiioProp = require("./property");

module.exports = class Setting extends MiioProp {
    constructor() {
        super("setting", {
            name: "setting",
            desc: "",
            type: ""
        });
    }
};
