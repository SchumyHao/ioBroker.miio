"use strict";

const MiioCommand = require("./command");

module.exports = class SetNightTime extends MiioCommand {
    constructor() {
        super("set_night_time", {
            name: "set night time",
            desc: "Enable night mode daily at bedtime",
            para: [{
                //begin
                min: 0,
                max: 86399,
                type: "number"
            },{
                //end
                min: 0,
                max: 86399,
                type: "number"
            }]
        });
    }
};