"use strict";

const MiioProp = require("./property");

module.exports = class RfidProductId extends MiioProp {
    constructor() {
        super("rfid_product_id", {
            name: "rfid product id",
            desc: "",
            type: ""
        });
    }
};
