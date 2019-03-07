"use strict";

const MiioProp = require("./property");

module.exports = class Voltage extends MiioProp {
    constructor() {
        super("voltage", {
            name: "voltage",
            desc: "",
            type: ""
        });
    }
};
