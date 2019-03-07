"use strict";

const MiioProp = require("./property");

module.exports = class WifiLed extends MiioProp {
    constructor() {
        super("wifi_led", {
            name: "wifi led",
            desc: "",
            type: ""
        });
    }
};
