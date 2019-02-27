"use strict";

const MiioCommand = require("./command");

module.exports = class GetDeviceProp extends MiioCommand {
    constructor() {
        super("get_device_prop", {
            name: "get device prop",
            desc: "Return device status",
            para: [{
                type: "string"
            },{
                type: "string"
            }]
        });
    }
};