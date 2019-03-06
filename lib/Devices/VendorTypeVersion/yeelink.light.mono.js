let Parent;
const objectExtend = require("../../tools").objectExtend;

try {
    Parent = require("../VendorType/yeelink.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDeviceYeelinkLightMono extends Parent {
    static get deviceName() {
        return "yeelink.light.mono";
    }

    static get deviceType() {
        return "VendorTypeVersionDevice";
    }

    static get states() {
        return objectExtend(super.states, {
            colorTemperature: {
                delete: true
            },
            RGB: {
                delete: true
            }
        });
    }

    /**
     * 
     * @param {AdapterMiio.MiioLibDevice} miioDev 
     */
    constructor(miioDev) {
        super(miioDev);
    }
};