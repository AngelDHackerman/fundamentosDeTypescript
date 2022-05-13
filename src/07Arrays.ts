export {};

let prices = [1, 2, 2, 1, 1, 212, 'hola', true];    // array de tipo any de forma inferida
// prices.push('asas');
// prices.push(true);
prices.push(12312212);

let products = ['hola', true];
products.push(false);

let mixed: (number | string | boolean | Object)[] = ['hola', true];
mixed.push(12);
mixed.push('as');
mixed.push(true);
mixed.push({});   // tipo Object
mixed.push([]);   // tipo Object

console.log(mixed)


