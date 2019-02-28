"use strict";

const MiioProp = require("./property");

module.exports = class LanCtrl extends MiioProp {
    constructor() {
        super("lan_ctrl", {
            name: "lan ctrl",
            desc: "The developer mode state",
            type: "string"
        });
    }
};
