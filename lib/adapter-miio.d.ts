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
            devicesDefined?: ControllerOptionDeviceDefine[];
            interval?: number
            autoDiscover?: boolean;
            autoDiscoverTimeout?: number;
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
            miioDevice: MiioLibDevice;
            states: Record<string, ioBroker.StateCommon>;
            commands: Record<string, MiioAdapterCommand>;
            transState(rw: any, ro: any , wo: any): Record<string, any>;
            attributeUpdate(state: string, val: string): void;
            invokeCommand(cmd: MiioAdapterCommand, val: any): boolean;
            listen(props: Record<string, any>): void;
        }

        type MiioAdapterCommandOpt = {
            name: string;
            desc?: string;
            para?: MiioAdapterCommandPara[];
            returnType?: string;
            statePara?: MiioAdapterCommandPara;
        }

        type MiioAdapterCommandPara = {
            type: string;
            vtype?: string;
            max?: number;
            min?: number;
            unit?: string;
            enum?: number|string[];
            obj?: Record<string, number|string>;
            default?: string|number;
        }

        type MiioAdapterCommand = {
            command: string;
            name: string;
            desc?: string;
            para?: MiioAdapterCommandPara[];
            returnType?: string;
            statePara?: MiioAdapterCommandPara;
        }

        type MiioAdapterPropertyOpt = {
            name: string;
            desc?: string;
            type: string;
            vtype?: string
            min?: number;
            max?: number;
            unit?: string;
            obj?: Record<string, number|string|boolean>;
            statePara?: MiioAdapterPropertyPara;
        }

        type MiioAdapterPropertyPara = {
            type: string;
            vtype?: string;
            min?: number;
            max?: number;
            unit?: string;
        }

        type MiioAdapterProperty = {
            prop: string;
            name: string;
            desc?: string;
            type: string;
            vtype?: string
            min?: number;
            max?: number;
            unit?: string;
            obj?: Record<string, number|string|boolean>;
            statePara: MiioAdapterPropertyPara;
        }

        type MiioAdapterRWState = {
            command: MiioAdapterCommand;
            property: MiioAdapterProperty;
        }

        type MiioAdapterROState = {
            property: MiioAdapterProperty;
        }

        type MiioAdapterWOState = {
            command: MiioAdapterCommand;
        }

        interface MiioLibDeviceManagement {
            model: string;
            address: string;
            token: string;
        }
        type MiioLibDeviceCallPara = string|number;
        interface MiioLibDevice {
            management: MiioLibDeviceManagement;
            id: string;
            destroy(): void;
            propertyUpdated(p: string, v: any): void;
            call(command: string, paras?: MiioLibDeviceCallPara[]): object;
            checkOk(): void;
            defineProperty(prop: string): void;
        }
        interface MiioLibRegisterInfo {
            token: string | null | undefined;
            id: string;
        }
    }
}