"use strict";

const MiioProp = require("./property");

module.exports = class WorkMode extends MiioProp {
    constructor() {
        super("work_mode", {
            name: "work mode",
            desc: "",
            type: ""
        });
    }
};
