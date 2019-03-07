"use strict";

const MiioProp = require("./property");

module.exports = class Volume extends MiioProp {
    constructor() {
        super("volume", {
            name: "volume",
            desc: "Volume of sound notifications",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
