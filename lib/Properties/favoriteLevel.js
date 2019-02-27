"use strict";

const MiioProp = require("./property");

module.exports = class FavoriteLevel extends MiioProp {
    constructor() {
        super("favorite_level", {
            name: "favorite level",
            desc: "",
            type: ""
        });
    }
};
