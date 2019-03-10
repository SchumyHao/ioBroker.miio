"use strict";

const MiioProp = require("./property");

module.exports = class AcPower extends MiioProp {
    constructor() {
        super("ac_power", {
            name: "ac power",
            desc: "Powered by AC",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
