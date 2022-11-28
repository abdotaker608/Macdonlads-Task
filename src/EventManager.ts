import { Order } from "./Order";

export class EventManager {
  subscribers: Record<string, Array<CallableFunction>>;

  constructor() {
    this.subscribers = {};
  }

  addSubscriber(event: string, subscriber: CallableFunction) {
    if (!(event in this.subscribers)) this.subscribers[event] = [];

    this.subscribers[event].push(subscriber);
  }

  notifyFor(event: string) {
    if (!Array.isArray(this.subscribers[event])) return;

    for (const subscriber of this.subscribers[event]) subscriber();
  }
}
