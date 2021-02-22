class EventListener {
  callback: Function;
  context: any;
  type: string;

  constructor(type: string, callback: Function, context: any) {
    this.type = type;
    this.callback = callback;
    this.context = context;
  }
}

// Main class
export class EventsManager {
  constructor() {
    this._listeners = [];
  }

  private _listeners: EventListener[];

  addEventListener(type: string, context: any, callback: Function) {
    this._listeners.push(new EventListener(type, callback, context));
  }

  removeEventListener(type: string, listener: any) {
    let i = 0;
    const l: number = this._listeners.length;
    let el: EventListener = null;
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

  dispatchEvent(type: string, data: any) {
    let i = 0;
    const l = this._listeners.length;
    let listener: EventListener = null;
    for (i = 0; i < l; i++) {
      listener = this._listeners[i];
      if (listener.type === type) {
        listener.callback.call(listener.context, data);
      }
    }
  }
}
