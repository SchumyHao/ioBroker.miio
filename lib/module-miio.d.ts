declare module 'miio' {
    type DeviceManagement = {
        model: string;
        address: string;
        token: string;
    }
    type DeviceCallPara = string|number;

    interface Device {
        management: DeviceManagement;
        id: string;
        destroy(): void;
        propertyUpdated(p: string, v: any): void;
        call(command: string, paras?: DeviceCallPara[]): object;
        checkOk(): void;
        defineProperty(prop: string): void;
    }
    interface RegisterInfo {
        token: string | null | undefined;
        id: string;
    }
}