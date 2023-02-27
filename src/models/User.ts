import axios, { AxiosResponse } from "axios";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

// love this type alias
type Callback = () => void;

export class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((res: AxiosResponse): void => this.set(res.data));
  }
}
