"use strict";

const MiioProp = require("./property");

module.exports = class ActDet extends MiioProp {
    constructor() {
        super("act_det", {
            name: "act det",
            desc: "Auto detect state",
            type: "string"
        });
    }
};
