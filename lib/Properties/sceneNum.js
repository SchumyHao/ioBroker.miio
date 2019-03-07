"use strict";

const MiioProp = require("./property");

module.exports = class SceneNum extends MiioProp {
    constructor() {
        super("scene_num", {
            name: "scene num",
            desc: "",
            type: ""
        });
    }
};
