"use strict";

const MiioCommand = require("./command");

module.exports = class setFunc extends MiioCommand {
    constructor() {
        super("set_func", {
            name: "set func",
            desc: "Control device behavior",
            para: [{
                type: "string",
                enum: [
                    "end",      //Stop cooking (obsolete)
                    "end02",    //Stop cooking
                    "nowarn",   //Disable warnings
                    "ack"       //Enable warnings?
                ]
            }]
        });
    }
};