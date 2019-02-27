"use strict";

const MiioCommand = require("./command");

module.exports = class appGetLocale extends MiioCommand {
    constructor() {
        super("app_get_locale", {
            name: "app get locale",
            desc: "Return locale information"
        });
    }
};