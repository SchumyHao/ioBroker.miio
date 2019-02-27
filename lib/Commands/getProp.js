"use strict";

const MiioCommand = require("./command");

module.exports = class GetProp extends MiioCommand {
    constructor() {
        super("get_prop", {
            name: "get prop",
            desc: "Return device status"
        });
    }
};