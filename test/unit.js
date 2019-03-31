const path = require("path");
const {
    tests,
    utils
} = require("@iobroker/testing");
const MiioControllerClass = require("../lib/miio");
const {
    expect
} = require("chai");

// Run unit tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, ".."), {
    defineAdditionalTests() {
        // Create mocks and asserts
        const {
            adapter,
            database
        } = utils.unit.createMocks();
        const controller = new MiioControllerClass({});
        let deviceId = 1;

        /**
         * 
         * @param {string} vendor 
         * @param {string} type 
         * @param {string} version 
         */
        function runOneDeviceTest(vendor, type, version, states) {
            const model = `${vendor}.${type}.${version}`;
            states["connected"] = {
                "desc": "Will be set to false if get property failed for 5 times",
                "name": "Is device connected",
                "read": true,
                "role": "indicator.reachable",
                "type": "boolean",
                "write": false
            },
            states["model"] = {
                "desc": "show current device's MIIO model",
                "name": "device model",
                "read": true,
                "role": "state",
                "type": "string",
                "write": false
            },
            it(model, () => {
                const id = deviceId++;
                controller.registerDevice({
                    id: `miio:${id}`,
                    management: {
                        model: `${model}`,
                        address: "127.0.0.1",
                        token: "ca82c4b695b908c0803779a606edaf3c"
                    },
                    defineProperty: () => {},
                    updatePollDuration: () => {},
                    on: () => {}
                }, true);
                const device = controller.deviceRegistered[id];
                expect(device.miioInfo).to.deep.equal({
                    "id": `${id}`,
                    "vendor": vendor,
                    "type": type,
                    "version": version,
                    "model": model
                });
                expect(device.device.states).to.deep.equal(states);
            });
        }

        describe("my test", () => {

            afterEach(() => {
                // The mocks keep track of all method invocations - reset them after each single test
                adapter.resetMockHistory();
                // We want to start each test with a fresh database
                database.clear();
            });
            runOneDeviceTest("zhimi", "humidifier", "v3", {
                "power": {
                    "write": true,
                    "read": true,
                    "name": "power",
                    "role": "state",
                    "type": "boolean"
                },
                "mode": {
                    "write": true,
                    "read": true,
                    "name": "mode",
                    "role": "state",
                    "type": "string"
                },
                "buzzer": {
                    "write": true,
                    "read": true,
                    "name": "buzzer",
                    "role": "state",
                    "type": "boolean"
                },
                "ledBrightnessLevel": {
                    "write": true,
                    "read": true,
                    "name": "ledBrightnessLevel",
                    "role": "state",
                    "type": "number",
                    "min": 0,
                    "max": 2
                },
                "childLock": {
                    "write": true,
                    "read": true,
                    "name": "childLock",
                    "role": "state",
                    "type": "boolean"
                },
                "targetHumidity": {
                    "write": true,
                    "read": true,
                    "name": "targetHumidity",
                    "unit": "%",
                    "role": "state",
                    "type": "number"
                },
                "temperature": {
                    "write": false,
                    "read": true,
                    "name": "temperature",
                    "role": "state",
                    "type": "number",
                    "unit": "°C"
                },
                "humidity": {
                    "write": false,
                    "read": true,
                    "name": "humidity",
                    "role": "state",
                    "type": "number",
                    "unit": "%"
                },
                "hardwareVersion": {
                    "write": false,
                    "read": true,
                    "name": "hardwareVersion",
                    "role": "state",
                    "type": "number"
                },
                "usedTime": {
                    "write": false,
                    "read": true,
                    "name": "usedTime",
                    "role": "state",
                    "type": "number",
                    "unit": "secs"
                },
                "LastPressedButton": {
                    "write": false,
                    "read": true,
                    "name": "LastPressedButton",
                    "role": "state",
                    "type": "string"
                }
            });
            runOneDeviceTest("chuangmi", "plug", "v3", {
                "power": {
                    "write": true,
                    "read": true,
                    "name": "power",
                    "role": "state",
                    "type": "boolean"
                },
                "usbPower": {
                    "write": true,
                    "read": true,
                    "name": "usbPower",
                    "role": "state",
                    "type": "boolean"
                },
                "wifiLed": {
                    "write": true,
                    "read": true,
                    "name": "wifiLed",
                    "role": "state",
                    "type": "boolean"
                },
                "temperature": {
                    "write": false,
                    "read": true,
                    "name": "temperature",
                    "role": "state",
                    "type": "number",
                    "unit": "°C"
                }
            });
            runOneDeviceTest("philips", "light", "bulb", {
                "brightness": {
                    "max": 100,
                    "min": 0,
                    "name": "brightness",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": true
                },
                "colorTemperature": {
                    "max": 100,
                    "min": 1,
                    "name": "colorTemperature",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": true
                },
                "power": {
                    "name": "power",
                    "read": true,
                    "role": "state",
                    "type": "boolean",
                    "write": true
                }
            });
            runOneDeviceTest("yunmi", "waterpuri", "lx3", {
                "FilteredWaterTDS": {
                    "name": "FilteredWaterTDS",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "TDS",
                    "write": false
                },
                "FrontActiveCarbonFilter": {
                    "name": "FrontActiveCarbonFilter",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": false
                },
                "FrontActiveCarbonFilterDay": {
                    "name": "FrontActiveCarbonFilterDay",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "days",
                    "write": false
                },
                "PPCottonFilter": {
                    "name": "PPCottonFilter",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": false
                },
                "PPCottonFilterDay": {
                    "name": "PPCottonFilterDay",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "days",
                    "write": false
                },
                "ROFilter": {
                    "name": "ROFilter",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": false
                },
                "ROFilterDay": {
                    "name": "ROFilterDay",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "days",
                    "write": false
                },
                "RearActiveCarbonFilter": {
                    "name": "RearActiveCarbonFilter",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "%",
                    "write": false
                },
                "RearActiveCarbonFilterDay": {
                    "name": "RearActiveCarbonFilterDay",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "days",
                    "write": false
                },
                "TapWaterTDS": {
                    "name": "TapWaterTDS",
                    "read": true,
                    "role": "state",
                    "type": "number",
                    "unit": "TDS",
                    "write": false
                }
            });
        });
    }
});