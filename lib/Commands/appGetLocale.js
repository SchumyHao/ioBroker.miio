"use strict";

const MiioCommand = require("./command");

module.exports = class AppGetLocale extends MiioCommand {
    constructor() {
        super("app_get_locale", {
            name: "app get locale",
            desc: "Return locale information"
        });
    }
};