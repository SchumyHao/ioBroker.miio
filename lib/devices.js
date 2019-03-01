"use strict";

const light = require("./Devices/light");
const airPurifier = require("./Devices/airPurifier");
const humidifier = require("./Devices/humidifier");
const powerPlug = require("./Devices/powerPlug");
const powerStrip = require("./Devices/powerStrip");

const devices = {
    // Device common settings
    "device": {
        states: {
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
    // Device: type
    "light": {
        type: "light",
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
            }
        }
    },
    "airpurifier": {
        type: "airpurifier",
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
                write: true,
                read: true,
                type: "number",
                states: {
                    "1": "idle",
                    "2": "auto",
                    "3": "silent",
                    "4": "favorite"
                }
            },
            temperature: {
                name: "Environment Temperature",
                role: "sensor",
                write: false,
                read: true,
                unit: "°C",
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
                role: "button",
                write: true,
                read: false,
                type: "boolean"
            },
            led: {
                name: "Turn on Led",
                role: "button",
                write: true,
                read: false,
                type: "boolean"
            },
            ledBrightness: {
                name: "Set Led Brightness",
                write: true,
                read: false,
                type: "number",
                states: {
                    "1": "bright",
                    "2": "dim",
                    "3": "off"
                }
            },
            favoriteLevel: {
                name: "Set Favorite Speed",
                role: "level",
                write: true,
                read: false,
                max: 16,
                type: "number"
            }
        }
    },
    "humidifier": {
        type: "humidifier",
        miioDevice: humidifier,
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
                write: true,
                read: true,
                type: "number",
                states: {
                    "1": "idle",
                    "2": "silent",
                    "3": "medium",
                    "4": "hight"
                }
            },
            temperature: {
                name: "Environment Temperature",
                role: "sensor",
                write: false,
                read: true,
                unit: "°C",
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
            buzzer: {
                name: "Turn on Buzzer",
                role: "button",
                write: true,
                read: false,
                type: "boolean"
            },
            ledBrightness: {
                name: "Set Led Brightness",
                write: true,
                read: false,
                type: "number",
                states: {
                    "1": "bright",
                    "2": "dim",
                    "3": "off"
                }
            },
            targetHumidity: {
                name: "Set Target Humidity",
                role: "level",
                write: true,
                read: true,
                type: "number"
            }
        }
    },
    "plug": {
        type: "powerPlug",
        miioDevice: powerPlug,
        states: {
            power: {
                name: "Is On",
                role: "switch",
                write: true,
                read: true,
                type: "boolean"
            }
        }
    },
    "powerstrip": {
        type: "powerStrip",
        miioDevice: powerStrip,
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
                write: true,
                read: true,
                type: "number",
                states: {
                    "1": "green",
                    "2": "normal"
                }
            }
        }
    },

    // Device: vendor+type
    // Device: vendor+type+version
    "yeelink.light.mono1": {
        states: {
            color: {
                delete: true
            }
        }
    },
    "philips.light.sread1": {
        states: {
            color: {
                delete: true
            }
        }
    },
    "philips.light.bulb": {
        states: {
            color: {
                delete: true
            }
        }
    }
};

module.exports = devices;