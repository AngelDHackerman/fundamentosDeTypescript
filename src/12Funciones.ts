export {};

type Size = 'S' | 'M' | 'L' | 'XL';

const createProductToJson = (
  title: string,
  createdAt: Date,    // Este tipo Date es especical en TS
  stock: number,
  size?: Size,        // todo: ? significa que es un parametro opcional.
) => {
  return {
    title,
    createdAt,
    stock,
    size,
  }
};

const producto1 = createProductToJson('P1', new Date(), 12, 'L');
console.log(producto1);
console.log(producto1.title);
console.log(producto1.stock);
