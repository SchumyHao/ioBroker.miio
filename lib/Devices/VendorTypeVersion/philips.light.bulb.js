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

module.exports = class MiioAdapterDevicePhilipsLightBulb extends Parent {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "philips.light.bulb";
    }

    getDeviceType() {
        return "VendorTypeVersionDevice";
    }

    getDeviceState() {
        return objectExtend(super.getDeviceState(), {
            color: {
                delete: true
            }
        });
    }
};