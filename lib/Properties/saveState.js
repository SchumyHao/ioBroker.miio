"use strict";

const MiioProp = require("./property");

module.exports = class SaveState extends MiioProp {
    constructor() {
        super("save_state", {
            name: "save state",
            desc: "Return whether the bulb state is saved on change",
            type: "string",
            vtype: "boolean",
            obj: {
                "1": true,
                "0": false
            }
        });
    }
};
