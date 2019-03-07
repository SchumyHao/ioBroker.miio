"use strict";

const MiioCommand = require("./command");

module.exports = class SetBrirgb extends MiioCommand {
    constructor() {
        super("set_brirgb", {
            name: "set brirgb",
            desc: "Set brightness level and the color",
            para: [{
                //rgb
                min: 0,
                max: 255,
                type: "object"
            },{
                //brightness
                min: 1,
                max: 100,
                type: "number"
            }]
        });
    }
};