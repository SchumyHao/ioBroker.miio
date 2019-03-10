"use strict";

const MiioProp = require("./property");

module.exports = class PurifyVolume extends MiioProp {
    constructor() {
        super("purify_volume", {
            name: "purify volume",
            desc: "The volume of purified air in cubic meter",
            unit: "m³",
            type: "number"
        });
    }
};
