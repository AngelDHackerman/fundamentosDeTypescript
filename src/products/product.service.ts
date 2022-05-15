// ! Aqui se define como vamos a insertar datos en las funciones, arrays.

import { Sizes, Product } from "./product.model";   // todo: Asi se hacen las importaciones desde los otros modulos.



export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });

  return total;
}
