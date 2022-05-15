// ! aqui se ejecuta todo el codigo de los demas modulos

import { products, addProduct, calcStock } from "./product.service";

addProduct( {
  title: 'Pro1',
  createdAt: new Date (1999, 2, 4),
  stock: 5,
});

addProduct({
  title: 'Pro2',
  createdAt: new Date (1998, 6, 29),
  stock: 9,
  size: 'M',
});

console.log(products);
console.log(calcStock());



