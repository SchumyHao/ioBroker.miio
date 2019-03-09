"use strict";

const MiioCommand = require("./command");

module.exports = class SetWifiLed extends MiioCommand {
    constructor() {
        super("set_wifi_led", {
            name: "set wifi led",
            desc: "Set the wifi led on/off",
            para: [{
                type: "boolean",
                vtype: "string",
                obj: {
                    true: "on",
                    false: "off"
                }
            }]
        });
    }
};