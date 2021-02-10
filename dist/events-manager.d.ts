export declare class EventsManager {
    constructor();
    private _listeners;
    addEventListener(type: string, context: any, callback: Function): void;
    removeEventListener(type: string, listener: any): void;
    dispatchEvent(type: string, data: any): void;
}
