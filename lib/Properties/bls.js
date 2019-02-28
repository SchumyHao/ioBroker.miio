"use strict";

const MiioProp = require("./property");

module.exports = class Bls extends MiioProp {
    constructor() {
        super("bls", {
            name: "bls",
            desc: "Smart night light mode state",
            type: "string"
        });
    }
};
