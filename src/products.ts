import { Bundle, Product } from "./Product";
import { burger, large, small, potato, drink, oneSize } from "./variants";

//Available products
export const smallCheeseburger = new Product(
  "Cheese Burger (Small)",
  burger,
  small,
  10,
  60
);
export const largeCheeseburger = new Product(
  "Cheese Burger (Large)",
  burger,
  large,
  10,
  75
);
export const smallMcCrispy = new Product(
  "Mc Crispy (Large)",
  burger,
  small,
  10,
  30
);
export const largeMcCrispy = new Product(
  "Mc Crispy (Large)",
  burger,
  large,
  10,
  50
);
export const smallBigMac = new Product(
  "Big Mac (Small)",
  burger,
  small,
  10,
  30
);
export const largeBigMac = new Product(
  "Big Mac (Large)",
  burger,
  large,
  10,
  50
);
export const cocacola = new Product("Cocacola", drink, oneSize, 5, 5);
export const sprite = new Product("Sprite", drink, oneSize, 5, 5);
export const fanta = new Product("Fanta", drink, oneSize, 5, 5);
export const friPotatoes = new Product("Fri Potatoes", potato, oneSize, 5, 15);
export const curlyPotatoes = new Product(
  "Curly Potatoes",
  potato,
  oneSize,
  5,
  15
);
export const croquettesPotatoes = new Product(
  "Croquettes Potatoes",
  potato,
  oneSize,
  5,
  15
);

//Available bundles
export const happyMealBundle = new Bundle("Happy Meal Bundle", [
  largeBigMac,
  friPotatoes,
  cocacola,
]);
export const familyBundle = new Bundle("Family Bundle", [
  largeBigMac,
  largeCheeseburger,
  smallMcCrispy,
  friPotatoes,
  croquettesPotatoes,
  curlyPotatoes,
  fanta,
  cocacola,
  sprite,
]);
