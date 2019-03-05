import { EventEmitter } from "events";

declare global {
    namespace AdapterMiio {
        type States = Record<string, any>;
        type Objects = Record<string, ioBroker.BaseObject>;
        interface Miio extends ioBroker.Adapter {
            /**
             * Save objects that needed to register.
             */
            tasks: ioBroker.Object[];
            /**
             * Save latest miio adapter objects.
             */
            miioObjects: Objects;
            /**
             * Save objects that updated before created.
             */
            delayed: States;
            /**
             * miio Controller
             */
            miioController: Controller;

            miioAdapterSyncObjects(instant: Miio): void;
        }
        type ControllerOptionDeviceDefine = {
            ip: string;
            token: string;
        };
        type ControllerOption = {
            devicesDefined: ControllerOptionDeviceDefine[];
            autoDiscover: boolean;
            autoDiscoverTimeout: number;
        }
        interface Controller extends EventEmitter {
            //constructor(options: ControllerOption): void;
            stop(): void;
            listen(): void;
            setState(id: string, state: string, val: any): void;
            //findBestMatchDevice(dev, vendor, type, version);
            //registerDevice(dev, isAutoDiscovered);
        }
        type ControllerDeviceMiioInfo = {
            id: string;
            vendor: string;
            type: string;
            version: string;
            model: string;
        }
        type ControllerDeviceConfigData = {
            name: string;
            ip: string;
            token: string;
        }
        type ControllerDeviceMiioDevice = MiioAdapterDevice
        type ControllerDevice = {
            miioInfo: ControllerDeviceMiioInfo;
            configData: ControllerDeviceConfigData;
            autoDiscovered: boolean;
            device: ControllerDeviceMiioDevice;
        }

        interface MiioAdapterDevice extends EventEmitter {
            deviceName: string;
            deviceType: string;
            states: any[];
            transState(rw: any, ro: any , wo: any): Record<string, any>;
            attributeUpdate(state: string, val: string): void;
            invokeCommand(cmd: string, val: string): void;
            listen(props: Record<string, any>): void;
        }
    }
}