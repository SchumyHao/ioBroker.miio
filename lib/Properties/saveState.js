"use strict";

const MiioProp = require("./property");

module.exports = class SaveState extends MiioProp {
    constructor() {
        super("save_state", {
            name: "save state",
            desc: "",
            type: ""
        });
    }
};
