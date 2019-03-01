let Parent = null;
const objectExtend = require("../../tools").objectExtend;

try {
    Parent = require("../VendorType/yeelink.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
    }
}

module.exports = class MiioAdapterDeviceYeelinkLightMono extends Parent {
    constructor(miioDev) {
        super(miioDev);
    }

    // function below may be overwritten
    getDeviceName() {
        return "yeelink.light.mono";
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