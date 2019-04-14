"use strict";

const network = require("./network");

const Device = require("./device");
const Placeholder = require("./placeholder");

module.exports = function (options) {
    let handle = network.ref();

    // Connecting to a device via IP, ask the network if it knows about it
    return network.findDeviceViaAddress(options)
        .then(device => {
            const deviceHandle = {
                ref: network.ref(),
                api: device
            };

            return new Device(deviceHandle);
        })
        .catch(e => {
            if (e.code === "missing-token" && options.withPlaceholder) {
                const deviceHandle = {
                    ref: network.ref(),
                    api: e.device
                };

                return new Placeholder(deviceHandle);
            }

            // Error handling - make sure to always release the handle
            handle.release();

            e.device = null;
            throw e;
        })
        .then(device => {
            // Make sure to release the handle
            handle.release();

            return device.init();
        });
};
