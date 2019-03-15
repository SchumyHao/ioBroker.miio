import { EventEmitter } from "events";
import { Device } from "miio";

declare global {
    namespace AdapterMiio {
        type States = Record<string, any>;
        type Objects = Record<string, ioBroker.BaseObject>;
        type ControllerOptionDeviceDefine = {
            ip: string;
            token: string;
            name?: string;
            polling?: number;
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
        type ControllerDeviceMiioDevice = MiioAdapterDevice
        type ControllerDevice = {
            miioInfo: ControllerDeviceMiioInfo;
            configData: ControllerOptionDeviceDefine;
            autoDiscovered: boolean;
            device: ControllerDeviceMiioDevice;
        }

        interface MiioAdapterDevice extends EventEmitter {
            deviceName: string;
            deviceType: string;
            miioDevice: Device;
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
            type: ioBroker.CommonType;
            vtype?: ioBroker.CommonType;
            max?: number;
            min?: number;
            unit?: string;
            enum?: (number|string)[];
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
            type: ioBroker.CommonType;
            desc?: string;
            vtype?: ioBroker.CommonType;
            min?: number;
            max?: number;
            unit?: string;
            obj?: Record<string, number|string|boolean>;
            statePara?: MiioAdapterPropertyPara;
            enum?: (string|number)[];
        }

        type MiioAdapterPropertyPara = {
            type: ioBroker.CommonType;
            vtype?: ioBroker.CommonType;
            min?: number;
            max?: number;
            unit?: string;
        }

        type MiioAdapterProperty = {
            prop: string;
            name: string;
            desc?: string;
            type: ioBroker.CommonType;
            vtype?: ioBroker.CommonType
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

    }
}