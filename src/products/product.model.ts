// ! aqui se pone todo lo relacionado con el modelado de datos.

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
}
