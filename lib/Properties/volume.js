"use strict";

const MiioProp = require("./property");

module.exports = class Volume extends MiioProp {
    constructor() {
        super("volume", {
            name: "volume",
            desc: "",
            type: ""
        });
    }
};
