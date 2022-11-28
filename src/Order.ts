import { EventManager } from "./EventManager";
import { Product } from "./Product";

export class Order {
  static id = 0;
  number: number;
  products: Product[];
  eventManager: EventManager;

  constructor(products: Product[]) {
    this.number = ++Order.id;
    this.products = products;
    this.eventManager = new EventManager();

    this.addSubscribers();
  }

  addSubscribers() {
    this.eventManager.addSubscriber("preparing", () =>
      console.log(`Preparing order ${this.number}...`)
    );
    this.eventManager.addSubscriber("ready", () =>
      console.log(`Order ${this.number} ready!`)
    );
  }

  async process() {
    this.eventManager.notifyFor("preparing");

    for (const product of this.products) await product.process();

    this.eventManager.notifyFor("ready");
  }
}
