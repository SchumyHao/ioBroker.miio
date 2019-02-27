"use strict";

const MiioProp = require("./property");

module.exports = class Favorite extends MiioProp {
    constructor() {
        super("favorite", {
            name: "favorite",
            desc: "",
            type: ""
        });
    }
};
