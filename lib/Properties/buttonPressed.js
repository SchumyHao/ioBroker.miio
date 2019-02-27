"use strict";

const MiioProp = require("./property");

module.exports = class ButtonPressed extends MiioProp {
    constructor() {
        super("button_pressed", {
            name: "button pressed",
            desc: "",
            type: ""
        });
    }
};
