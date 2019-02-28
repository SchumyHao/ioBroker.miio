"use strict";

const MiioProp = require("./property");

module.exports = class Custom extends MiioProp {
    constructor() {
        super("custom", {
            name: "custom",
            desc: "Cooker recipe customizations",
            type: "string"
        });
    }
};
