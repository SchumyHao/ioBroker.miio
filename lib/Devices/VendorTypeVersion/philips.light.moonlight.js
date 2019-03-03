let Parent = null;
const objectExtend = require("../../tools").objectExtend;
const Pow = require("../../Properties/pow");
const Bri = require("../../Properties/bri");

try {
    Parent = require("../VendorType/philips.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
    }
}

module.exports = class MiioAdapterDevicePhilipsLightMoonlight extends Parent {
    constructor(miioDev) {
        super(miioDev);

        this.rwState = super.getRWStateRaw();
        this.rwState.power.property = new Pow(miioDev);
        this.rwState.brightness.property = new Bri(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "philips.light.moonlight";
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

    getSupportProperties() {
        const properties = super.getSupportProperties();

        for (const k in this.rwState) {
            if (this.rwState.hasOwnProperty(k)) {
                properties[k] = this.rwState[k].property;
            }
        }

        for (const k in this.roState) {
            if (this.roState.hasOwnProperty(k)) {
                properties[k] = this.roState[k].property;
            }
        }
        return properties;
    }
};