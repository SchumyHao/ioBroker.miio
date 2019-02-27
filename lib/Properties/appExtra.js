"use strict";

const MiioProp = require("./property");

module.exports = class AppExtra extends MiioProp {
    constructor() {
        super("app_extra", {
            name: "app extra",
            desc: "Extra features state",
            type: "number"
        });
    }
};
