"use strict";

const MiioProp = require("./property");

module.exports = class Eyecare extends MiioProp {
    constructor() {
        super("eyecare", {
            name: "eyecare",
            desc: "Current eyecare mode",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
