import { EventManager } from "./EventManager";
import { Kind, Size } from "./Variant";
import { bundle, oneSize } from "./variants";

export class Product {
  name: string;
  kind: Kind;
  size: Size;
  duration: number;
  price: number;
  eventManager: EventManager;

  constructor(
    name: string,
    kind: Kind,
    size: Size,
    duration: number,
    price: number
  ) {
    this.name = name;
    this.kind = kind;
    this.size = size;
    this.duration = duration;
    this.price = price;
    this.eventManager = new EventManager();

    this.addDefaultSubscribers();
  }

  async process() {
    this.eventManager.notifyFor("preparing");

    await new Promise((resolve) => setTimeout(resolve, this.duration * 1000));

    this.eventManager.notifyFor("ready");
  }

  async addDefaultSubscribers() {
    this.eventManager.addSubscriber("preparing", () =>
      console.log(`Preparing ${this.name}...`)
    );
    this.eventManager.addSubscriber("ready", () =>
      console.log(`${this.name} is ready!`)
    );
  }
}

export class Bundle extends Product {
  private products: Product[];

  constructor(name: string, products: Product[]) {
    super(name, bundle, oneSize, 0, 0);

    this.products = products;
    this.price = this.calculatePrice();
    this.duration = this.calculateDuration();
  }

  private calculatePrice() {
    const totalPrice = this.products.reduce(
      (acc, product) => acc + product.price,
      0
    );
    return totalPrice * 0.9; //Reduction by 10%
  }

  private calculateDuration() {
    const totalDuration = this.products.reduce(
      (acc, product) => acc + product.duration,
      0
    );
    return totalDuration;
  }

  async process() {
    this.eventManager.notifyFor("preparing");

    for (const product of this.products) await product.process();

    this.eventManager.notifyFor("ready");
  }
}
