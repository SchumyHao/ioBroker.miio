"use strict";

const MiioProp = require("./property");

module.exports = class WaterpuriVolume extends MiioProp {
    constructor() {
        super("volume", {
            name: "volume",
            desc: "",
            min: 0,
            max: 100,
            unit: "%",
            type: "number"
        });
    }
};
