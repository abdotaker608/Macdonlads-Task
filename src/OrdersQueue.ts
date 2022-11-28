import { Order } from "./Order";

export class OrdersQueue {
  static instance: OrdersQueue | null = null;
  queue: Order[] = [];
  running: boolean = false;

  private constructor() {}

  enqueue(order: Order) {
    this.queue.push(order);

    if (!this.running) {
      this.running = true;
      this.process();
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  async process() {
    while (!this.isEmpty()) {
      const order = this.dequeue()!;
      await order.process();
    }

    this.running = false;
  }

  static getIstance() {
    if (this.instance) return this.instance;

    this.instance = new OrdersQueue();
    return this.instance;
  }
}
