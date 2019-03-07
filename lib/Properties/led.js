"use strict";

const MiioProp = require("./property");

module.exports = class Led extends MiioProp {
    constructor() {
        super("led", {
            name: "led",
            desc: "Current LED stste",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
