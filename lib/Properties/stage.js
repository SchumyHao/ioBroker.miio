"use strict";

const MiioProp = require("./property");

module.exports = class Stage extends MiioProp {
    constructor() {
        super("stage", {
            name: "stage",
            desc: "",
            type: ""
        });
    }
};
