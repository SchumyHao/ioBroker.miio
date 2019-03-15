const path = require("path");
const { tests, utils } = require("@iobroker/testing");
const MiioControllerClass = require("../lib/miio");
const { expect } = require("chai");

// Run unit tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, ".."), {
    defineAdditionalTests () {
        // Create mocks and asserts
        const { adapter, database } = utils.unit.createMocks();
        const { assertObjectExists } = utils.unit.createAsserts(database, adapter);
        const controller = new MiioControllerClass({});

        describe("my test", () => {

            afterEach(() => {
                // The mocks keep track of all method invocations - reset them after each single test
                adapter.resetMockHistory();
                // We want to start each test with a fresh database
                database.clear();
            });

            it("zhimi.humidifier.v3", () => {
                controller.registerDevice({
                    id: "miio:1",
                    management: {
                        model: "zhimi.humidifier.v3",
                        address: "127.0.0.1",
                        token: "ca82c4b695b908c0803779a606edaf3c"
                    },
                    defineProperty: (prop) => {},
                    updatePollDuration: (duration) => {}
                }, true);
                const device = controller.deviceRegistered[1];
                expect(JSON.stringify(device.miioInfo)).to.deep.equal(`{"id":"1","vendor":"zhimi","type":"humidifier","version":"v3","model":"zhimi.humidifier.v3"}`);
                expect(JSON.stringify(device.configData)).to.deep.equal(`{"name":"zhimi.humidifier.v3","ip":"127.0.0.1","token":"ca82c4b695b908c0803779a606edaf3c","polling":3000}`);
                expect(JSON.stringify(device.device.properties)).to.deep.equal(`{"power":{"prop":"power","name":"power","desc":"Current device power state","type":"string","vtype":"boolean","obj":{"on":true,"off":false},"statePara":{"type":"boolean"}},"mode":{"prop":"mode","name":"mode","desc":"Current operation mode","type":"string","statePara":{"type":"string"}},"buzzer":{"prop":"buzzer","name":"buzzer","desc":"Current buzzer state","type":"string","vtype":"boolean","obj":{"on":true,"off":false},"statePara":{"type":"boolean"}},"ledBrightnessLevel":{"prop":"led_b","name":"led b","desc":"LED brightness","type":"number","min":0,"max":2,"statePara":{"type":"number","min":0,"max":2}},"childLock":{"prop":"child_lock","name":"child lock","desc":"Current child lock state","type":"string","vtype":"boolean","obj":{"on":true,"off":false},"statePara":{"type":"boolean"}},"targetHumidity":{"prop":"limit_hum","name":"limit hum","desc":"Target humidity","type":"number","unit":"%","statePara":{"type":"number","unit":"%"}},"temperature":{"prop":"temp_dec","name":"temp dec","desc":"Current temperature. Need divided by 10","type":"number","unit":"°C","statePara":{"type":"number","unit":"°C"}},"humidity":{"prop":"humidity","name":"humidity","desc":"Current humidity","type":"number","unit":"%","statePara":{"type":"number","unit":"%"}},"hardwareVersion":{"prop":"hw_version","name":"hw version","desc":"The hardware version","type":"number","statePara":{"type":"number"}},"usedTime":{"prop":"use_time","name":"use time","desc":"How long the device has been active in seconds","type":"number","unit":"secs","statePara":{"type":"number","unit":"secs"}},"LastPressedButton":{"prop":"button_pressed","name":"button pressed","desc":"Last pressed button","type":"string","statePara":{"type":"string"}}}`);
                expect(JSON.stringify(device.device.commands)).to.deep.equal(`{"power":{"command":"set_power","name":"set power","desc":"Set power on/off","para":[{"type":"boolean","vtype":"string","obj":{"true":"on","false":"off"}}],"statePara":{"type":"boolean"}},"mode":{"command":"set_mode","name":"set mode","desc":"Set mode","para":[{"type":"string","enum":["auto","silent","favorite","idle","medium","high","strong"]}],"statePara":{"type":"string"}},"buzzer":{"command":"set_buzzer","name":"set buzzer","desc":"Set buzzer on/off","para":[{"type":"boolean","vtype":"string","obj":{"true":"on","false":"off"}}],"statePara":{"type":"boolean"}},"ledBrightnessLevel":{"command":"set_led_b","name":"set led b","desc":"Set led brightness","para":[{"min":0,"max":2,"type":"number"}],"statePara":{"type":"number","min":0,"max":2}},"childLock":{"command":"set_child_lock","name":"set child lock","desc":"Set child lock on/off","para":[{"type":"boolean","vtype":"string","obj":{"true":"on","false":"off"}}],"statePara":{"type":"boolean"}},"targetHumidity":{"command":"set_limit_hum","name":"set limit hum","desc":"Set the target humidity","para":[{"type":"number","enum":[30,40,50,60,70,80]}],"statePara":{"type":"number"}}}`);
                expect(JSON.stringify(device.device.states)).to.deep.equal(`{"connected":{"name":"Is device connected","role":"indicator.reachable","write":true,"read":false,"type":"boolean","desc":"Will be set to false if get property failed for 5 times"},"power":{"write":true,"read":true,"name":"power","role":"state","type":"boolean"},"mode":{"write":true,"read":true,"name":"mode","role":"state","type":"string"},"buzzer":{"write":true,"read":true,"name":"buzzer","role":"state","type":"boolean"},"ledBrightnessLevel":{"write":true,"read":true,"name":"ledBrightnessLevel","role":"state","type":"number","min":0,"max":2},"childLock":{"write":true,"read":true,"name":"childLock","role":"state","type":"boolean"},"targetHumidity":{"write":true,"read":true,"name":"targetHumidity","role":"state","type":"number"},"temperature":{"write":false,"read":true,"name":"temperature","role":"state","type":"number","unit":"°C"},"humidity":{"write":false,"read":true,"name":"humidity","role":"state","type":"number","unit":"%"},"hardwareVersion":{"write":false,"read":true,"name":"hardwareVersion","role":"state","type":"number"},"usedTime":{"write":false,"read":true,"name":"usedTime","role":"state","type":"number","unit":"secs"},"LastPressedButton":{"write":false,"read":true,"name":"LastPressedButton","role":"state","type":"string"}}`);
            });

            it("chuangmi.plug.v3", () => {
                controller.registerDevice({
                    id: "miio:2",
                    management: {
                        model: "chuangmi.plug.v3",
                        address: "127.0.0.1",
                        token: "ca82c4b695b908c0803779a606edaf3c"
                    },
                    defineProperty: (prop) => {},
                    updatePollDuration: (duration) => {}
                }, true);
                const device = controller.deviceRegistered[2];
                expect(JSON.stringify(device.miioInfo)).to.deep.equal(`{"id":"2","vendor":"chuangmi","type":"plug","version":"v3","model":"chuangmi.plug.v3"}`);
                expect(JSON.stringify(device.configData)).to.deep.equal(`{"name":"chuangmi.plug.v3","ip":"127.0.0.1","token":"ca82c4b695b908c0803779a606edaf3c","polling":3000}`);
                expect(JSON.stringify(device.device.properties)).to.deep.equal(`{"power":{"prop":"on","name":"on","desc":"True if device is on","type":"boolean","statePara":{"type":"boolean"}},"usbPower":{"prop":"usb_on","name":"usb on","desc":"True if device USB power is on","type":"boolean","statePara":{"type":"boolean"}},"wifiLed":{"prop":"wifi_led","name":"wifi led","desc":"Current device WiFi LED state","type":"string","vtype":"boolean","obj":{"on":true,"off":false},"statePara":{"type":"boolean"}},"temperature":{"prop":"temperature","name":"temperature","desc":"Current temperature.","type":"number","unit":"°C","statePara":{"type":"number","unit":"°C"}}}`);
                expect(JSON.stringify(device.device.commands)).to.deep.equal(`{"power":{"command":"CommandInPara","name":"set power for chuangmi.plug.v3","desc":"set power for chuangmi.plug.v3","para":[{"type":"boolean","obj":{"true":{"command":"set_on","name":"set on","desc":"Power on","para":[]},"false":{"command":"set_off","name":"set off","desc":"Power off","para":[]}}}],"statePara":{"type":"boolean"}},"usbPower":{"command":"CommandInPara","name":"set usb power for chuangmi.plug.v3","desc":"set usb power for chuangmi.plug.v3","para":[{"type":"boolean","obj":{"true":{"command":"set_usb_on","name":"set usb on","desc":"USB Power on","para":[]},"false":{"command":"set_usb_off","name":"set usb off","desc":"USB Power off","para":[]}}}],"statePara":{"type":"boolean"}},"wifiLed":{"command":"set_wifi_led","name":"set wifi led","desc":"Set the wifi led on/off","para":[{"type":"boolean","vtype":"string","obj":{"true":"on","false":"off"}}],"statePara":{"type":"boolean"}}}`);
                expect(JSON.stringify(device.device.states)).to.deep.equal(`{"connected":{"name":"Is device connected","role":"indicator.reachable","write":true,"read":false,"type":"boolean","desc":"Will be set to false if get property failed for 5 times"},"power":{"write":true,"read":true,"name":"power","role":"state","type":"boolean"},"usbPower":{"write":true,"read":true,"name":"usbPower","role":"state","type":"boolean"},"wifiLed":{"write":true,"read":true,"name":"wifiLed","role":"state","type":"boolean"},"temperature":{"write":false,"read":true,"name":"temperature","role":"state","type":"number","unit":"°C"}}`);
            });
        });
    }
});
