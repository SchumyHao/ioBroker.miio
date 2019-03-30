"use strict";

const objectExtend = require("../../tools").objectExtend;
const Waterpuri = require("../Type/waterpuri");

module.exports = class MiioAdapterDeviceYunmiWaterpuri extends Waterpuri {
    /**
     * @returns {string}
     */
    get deviceName() {
        return "yunmi.waterpuri";
    }

    /**
     * @returns {string}
     */
    get deviceType() {
        return "VendorTypeDevice";
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterRWState>}
     */
    get rwState() {
        return objectExtend(super.roState, {
            power: {
                delete: true
            }
        });
    }

    /**
     * @returns {Record<string, AdapterMiio.MiioAdapterROState>}
     */
    get roState() {
        return objectExtend(super.roState, {




            TDS: {
                delete: true
            },
            filter1Life: {
                delete: true
            },
            filter1State: {
                delete: true
            },
            filterLife: {
                delete: true
            },
            filterState: {
                delete: true
            },
            life: {
                delete: true
            },
            state: {
                delete: true
            },
            level: {
                delete: true
            },
            volume: {
                delete: true
            },
            Filter: {
                delete: true
            },
            usage: {
                delete: true
            },
            temperature: {
                delete: true
            },
            uvLife: {
                delete: true
            },
            uvState: {
                delete: true
            },
            elecvalState: {
                delete: true
            }
        });
    }

    constructor(miioDev) {
        super(miioDev);
        // WARNING: Hack miio lib
        this.miioDev.loadProperties = this.loadProperties.bind(this);
    }

	/**
	 * 
	 *
	 * @param {*} props
	 */
	loadProperties(props) {
        this.emit("warning", `props=${JSON.stringify(props)}`);
		// Call get_prop to map everything
		// @ts-ignore
		return this.call('get_prop', [])
			.then(result => {
                const obj = {};
				// @ts-ignore
				this._pushProperty(obj, "ttds", result[0]);
				// @ts-ignore
				this._pushProperty(obj, "ftds", result[1]);

                const pfd = (result[11] - result[3]) / 24;
				// @ts-ignore
				this._pushProperty(obj, "pfp", pfd);
				// @ts-ignore
                this._pushProperty(obj, "pfd", pfd * 24 * 100 / result[11]);

                const fcfd = (result[13] - result[5]) / 24;
				// @ts-ignore
                this._pushProperty(obj, "fcfp", fcfd);
				// @ts-ignore
                this._pushProperty(obj, "fcfd", fcfd * 24 * 100 / result[13]);

                const rfd = (result[15] - result[7]) / 24;
				// @ts-ignore
                this._pushProperty(obj, "rfp", rfd);
				// @ts-ignore
                this._pushProperty(obj, "rfd", rfd * 24 * 100 / result[15]);

                const rcfd = (result[17] - result[9]) / 24;
				// @ts-ignore
                this._pushProperty(obj, "rcfp", rcfd);
				// @ts-ignore
                this._pushProperty(obj, "rcfd", rcfd * 24 * 100 / result[17]);

				return obj;
			});
	}

};