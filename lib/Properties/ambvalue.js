"use strict";

const MiioProp = require("./property");

module.exports = class Ambvalue extends MiioProp {
    constructor() {
        super("ambvalue", {
            name: "ambvalue",
            desc: "Brightness of the ambient light",
            type: "number"
        });
    }
};
