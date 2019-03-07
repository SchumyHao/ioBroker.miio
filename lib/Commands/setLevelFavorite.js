"use strict";

const MiioCommand = require("./command");

module.exports = class SetLevelFavorite extends MiioCommand {
    constructor() {
        super("set_level_favorite", {
            name: "set level favorite",
            desc: "Set favorite level",
            para: [{
                min: 0,
                max: 17,
                type: "number"
            }]
        });
    }
};