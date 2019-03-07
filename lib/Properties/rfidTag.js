"use strict";

const MiioProp = require("./property");

module.exports = class RfidTag extends MiioProp {
    constructor() {
        super("rfid_tag", {
            name: "rfid tag",
            desc: "",
            type: ""
        });
    }
};
