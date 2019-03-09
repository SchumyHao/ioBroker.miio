"use strict";

const MiioProp = require("./property");

module.exports = class WifiLed extends MiioProp {
    constructor() {
        super("wifi_led", {
            name: "wifi led",
            desc: "Current device WiFi LED state",
            type: "string",
            vtype: "boolean",
            obj: {
                on: true,
                off: false
            }
        });
    }
};
