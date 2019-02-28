"use strict";

const MiioProp = require("./property");

module.exports = class MinSetTempe extends MiioProp {
    constructor() {
        super("min_set_tempe", {
            name: "min set tempe",
            desc: "Minmum setup temperature can be set",
            type: "number"
        });
    }
};
