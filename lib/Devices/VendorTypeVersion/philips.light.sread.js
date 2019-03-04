let Parent = null;
const objectExtend = require("../../tools").objectExtend;

try {
    Parent = require("../VendorType/philips.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
    }
}

module.exports = class MiioAdapterDevicePhilipsLightSread extends Parent {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "philips.light.sread";
    }

    getDeviceType() {
        return "VendorTypeVersionDevice";
    }

    getDeviceStates() {
        return objectExtend(super.getDeviceStates(), {
        });
    }

    getSupportCommands() {
        const commands = super.getSupportCommands();

        for (const k in this.rwState) {
            if (this.rwState.hasOwnProperty(k)) {
                commands[k] = this.rwState[k].command;
            }
        }

        for (const k in this.woState) {
            if (this.woState.hasOwnProperty(k)) {
                commands[k] = this.woState[k].command;
            }
        }
        return commands;
    }
};