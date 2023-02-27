 // love this type alias
 type Callback = () => void;

export class Eventing {
  events: {
    [key: string]: Callback[];
  } = {};

  on(event: string, cb: Callback): void {
    const handlers = this.events[event] ?? [];
    handlers.push(cb);
    this.events[event] = handlers;
  }

  trigger(event: string): void {
    const handlers = this.events[event];

    if (!handlers || !handlers.length) return;

    handlers.forEach((cb) => cb());
  }
}
