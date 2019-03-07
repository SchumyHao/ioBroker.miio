"use strict";

const MiioProp = require("./property");

module.exports = class ChildLock extends MiioProp {
    constructor() {
        super("child_lock", {
            name: "child lock",
            desc: "Current child lock state",
            type: "string"
        });
    }
};
