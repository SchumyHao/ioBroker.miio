"use strict";

const MiioCommand = require("./command");

module.exports = class GoNight extends MiioCommand {
    constructor() {
        super("go_night", {
            name: "go night",
            desc: "Set Night light"
        });
    }
};