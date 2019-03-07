"use strict";

const MiioProp = require("./property");

module.exports = class TransLevel extends MiioProp {
    constructor() {
        super("trans_level", {
            name: "trans level",
            desc: "",
            type: ""
        });
    }
};
