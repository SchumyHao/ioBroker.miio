"use strict";

const MiioProp = require("./property");

module.exports = class Mb extends MiioProp {
    constructor() {
        super("mb", {
            name: "mb",
            desc: "sp_xm_bracelet",
            type: "number"
        });
    }
};
