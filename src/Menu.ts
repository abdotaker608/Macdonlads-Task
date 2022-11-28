import { Product } from "./Product";

export class Menu {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
