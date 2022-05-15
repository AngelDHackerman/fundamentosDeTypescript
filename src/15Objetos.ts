export {}

type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);

}

addProduct({
  title: 'Pro1',
  createdAt: new Date (1995, 1, 5),
  stock: 10
})

console.log(products);
