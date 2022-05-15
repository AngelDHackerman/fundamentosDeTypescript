export {}

const calcTotal = (prices: number[]): string => { // ! (prices: number[]): string, significa que debe retornar un string
  let total = 0;
  prices.forEach((item) => {
    total += item;
  });
  return total.toString();
}

const printTotal = (prices: number[]): void => { // ! :void significa que no retornara nada
  const rta = calcTotal(prices);
  console.log(`El total es ${rta}`);
}

const rta = calcTotal([1,2,1,1,1]);
console.log(rta);

printTotal([1,2,3,1,1,1])
