"use strict";

const MiioProp = require("./property");

module.exports = class Cct extends MiioProp {
    constructor() {
        super("cct", {
            name: "cct",
            desc: "",
            type: ""
        });
    }
};
