"use strict";

const MiioProp = require("./property");

module.exports = class FavoriteLevel extends MiioProp {
    constructor() {
        super("favorite_level", {
            name: "favorite level",
            desc: "Thw level which is used for favorite mode",
            min: 0,
            max: 17,
            type: "number"
        });
    }
};
