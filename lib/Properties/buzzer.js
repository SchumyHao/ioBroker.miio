"use strict";

const MiioProp = require("./property");

module.exports = class Buzzer extends MiioProp {
    constructor() {
        super("buzzer", {
            name: "buzzer",
            desc: "",
            type: ""
        });
    }
};
