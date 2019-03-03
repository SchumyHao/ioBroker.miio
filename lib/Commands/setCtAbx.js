"use strict";

const MiioCommand = require("./command");

module.exports = class SetCtAbx extends MiioCommand {
    constructor(miioDev) {
        super(miioDev, "set_ct_abx", {
            name: "set ct abx",
            desc: "Set color temp in kelvin",
            para: [{
                //kelvin
                min: 1700,
                max: 6500,
                type: "number"
            },{
                //mode
                type: "string",
                enum: [
                    "smooth",
                    "sudden"
                ],
                default: "smooth"
            },{
                //transition
                min: 0,
                type: "number",
                default: 500
            }]
        });
    }
};