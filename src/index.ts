import { Menu } from "./Menu";
import { Order } from "./Order";
import { OrdersQueue } from "./OrdersQueue";
import {
  cocacola,
  familyBundle,
  fanta,
  happyMealBundle,
  largeBigMac,
  largeCheeseburger,
  largeMcCrispy,
  smallBigMac,
  smallCheeseburger,
  smallMcCrispy,
  sprite,
} from "./products";

/* Menu */
const menu = new Menu();

//Add products to menu
menu.addProduct(smallCheeseburger);
menu.addProduct(largeCheeseburger);
menu.addProduct(smallMcCrispy);
menu.addProduct(largeMcCrispy);
menu.addProduct(smallBigMac);
menu.addProduct(largeBigMac);
menu.addProduct(cocacola);
menu.addProduct(sprite);
menu.addProduct(fanta);

/* Orders Queue */
const ordersQueue = OrdersQueue.getIstance();

/* Orders */
const orders = [
  new Order([familyBundle]),
  new Order([happyMealBundle]),
  new Order([
    largeCheeseburger,
    largeMcCrispy,
    smallBigMac,
    fanta,
    cocacola,
    cocacola,
  ]),
  new Order([smallBigMac, cocacola]),
  new Order([largeMcCrispy, smallCheeseburger, sprite]),
];

/* Orders Processing ( Assuming there is only 1 chief :> ) */
orders.forEach((order) => ordersQueue.enqueue(order));
