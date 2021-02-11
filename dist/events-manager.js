class EventListener {
    constructor(type, callback, context) {
        this.type = type;
        this.callback = callback;
        this.context = context;
    }
}
export class EventsManager {
    constructor() {
        this._listeners = [];
    }
    addEventListener(type, context, callback) {
        this._listeners.push(new EventListener(type, callback, context));
    }
    removeEventListener(type, listener) {
        let i = 0;
        const l = this._listeners.length;
        let el = null;
        let index = -1;
        for (i = 0; i < l; i++) {
            el = this._listeners[i];
            if (el.type === type && el.context === listener) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    dispatchEvent(type, data) {
        let i = 0;
        const l = this._listeners.length;
        let listener = null;
        for (i = 0; i < l; i++) {
            listener = this._listeners[i];
            if (listener.type === type) {
                listener.callback.call(listener.context, data);
            }
        }
    }
}
