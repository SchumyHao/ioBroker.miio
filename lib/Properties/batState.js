"use strict";

const MiioProp = require("./property");

module.exports = class BatState extends MiioProp {
    constructor() {
        super("bat_state", {
            name: "bat state",
            desc: "",
            type: ""
        });
    }
};
