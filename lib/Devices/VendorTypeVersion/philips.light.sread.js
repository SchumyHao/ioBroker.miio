"use strict";

let Parent;
const objectExtend = require("../../tools").objectExtend;

const EnableAmb = require("../../Commands/enableAmb");
const AmbStatus = require("../../Properties/ambstatus");
const SetAmbBright = require("../../Commands/setAmbBright");
const AmbValue = require("../../Properties/ambvalue");
const SetEyecare = require("../../Commands/setEyecare");
const Eyecare = require("../../Properties/eyecare");

try {
    Parent = require("../VendorType/philips.light");
} catch (e) {
    try {
        Parent = require("../Type/light");
    } catch (e) {
        console.error("Can not require both VendorType and Type device.");
        throw(e);
    }
}

module.exports = class MiioAdapterDevicePhilipsLightSread extends Parent {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "philips.light.sread";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeVersionDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.rwState, {
            colorTemperature: {
                delete: true
            },
            eyeCare: {
                command: new SetEyecare(),
                property: new Eyecare(),
            },
            secondLightPower: {
                command: new EnableAmb(),
                property: new AmbStatus(),
            },
            secondLightBrightness: {
                command: new SetAmbBright(),
                property: new AmbValue(),
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
    }
};