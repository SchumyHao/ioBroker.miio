"use strict";

const light = require("./Devices/light");
const airPurifier = require("./Devices/airPurifier");

const devices = {
    "yeelink.light.strip1": {
        type: "light",
        fullName: "Yeelink Strip",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            color: {
                name: "Color value",
                role: "level.rgb",
                write: true,
                read: true,
                type: "string"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "yeelink.light.lamp1": {
        type: "light",
        fullName: "Yeelink Lamp",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            color: {
                name: "Color value",
                role: "level.rgb",
                write: true,
                read: true,
                type: "string"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "yeelink.light.mono1": {
        type: "light",
        fullName: "Yeelink Mono Bulb",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "yeelink.light.color1": {
        type: "light",
        fullName: "Yeelink Color Bulb",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            color: {
                name: "Color value",
                role: "level.rgb",
                write: true,
                read: true,
                type: "string"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "philips.light.sread1": {
        type: "light",
        fullName: "Philiphs Eye Care Lamp",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "philips.light.bulb": {
        type: "light",
        fullName: "Philiphs Bulb",
        miioDevice: light,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            brightness: {
                name: "Brightness value",
                role: "level.dimmer",
                write: true,
                read: true,
                unit: "%",
                type: "number"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    },
    "zhimi.airpurifier.m1": {
        type: "airpurifier",
        fullName: "Air Purifier 2 (mini)",
        miioDevice: airPurifier,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            },
            mode: {
                name: "Work Mode",
                role: "switch",
                write: true,
                read: true,
                type: "string"
            },
            temperature: {
                name: "Environment Temperature",
                role: "sensor",
                write: false,
                read: true,
                unit: "℃",
                type: "number"
            },
            humidity: {
                name: "Environment Relative Humidity",
                role: "sensor",
                write: false,
                read: true,
                unit: "%",
                type: "number"
            },
            "pm2.5": {
                name: "Environment PM2.5",
                role: "sensor",
                write: false,
                read: true,
                type: "number"
            },
            buzzer: {
                name: "Turn on Buzzer",
                role: "switch",
                write: true,
                read: false,
                type: "boolean"
            },
            led: {
                name: "Turn on Led",
                role: "switch",
                write: true,
                read: false,
                type: "boolean"
            },
            ledBrightness: {
                name: "Set Led Brightness",
                role: "switch",
                write: true,
                read: false,
                type: "boolean"
            },
            favoriteLevel: {
                name: "Set Favorite Mode",
                role: "switch",
                write: true,
                read: false,
                type: "string"
            },
            connected: {
                name: "Is device connected",
                role: "indicator.reachable",
                write: true,
                read: false,
                type: "boolean",
                desc: "Will be set to false if get property failed for 5 times"
            }
        }
    }
};

module.exports = devices;