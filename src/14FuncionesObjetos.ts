export {}

      // ? Funcion que recibe un OBJETO como parametro

const login = (data: {email: string, password: number}) => {
  console.log(data.email, data.password);

};

// login('angel@angel.com', '121212')
login({
  email: 'angel@angel.com',
  password: 121212,
})





type Size = 'S' | 'M' | 'L' | 'XL';
const products: any [] = [];

const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size,
}) => {
  products.push(data);
};


addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12
});

addProduct({
  title: 'Pro2',
  createdAt: new Date(1998, 3, 23),
  stock: 6,
  size: 'XL'
});

console.log(products);
