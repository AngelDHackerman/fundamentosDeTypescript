export {};

let myNull: null = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;
myNumber = 12;

let myString: string | undefined = undefined;

myString = 'assas';

const hi = (name: string | null) => {
  let hello = 'Hola ';
  if (name) {
    hello += name;
  } else {
    hello += 'no body';
  }
  console.log(hello);
}

const hiV2 = (name: string | null) => {
  let hello = 'Hola ';
  hello += name?.toLocaleLowerCase() || 'no body'; // ! hello += name?. esto es el optional chaining, es algo natural de JS
  console.log(hello);
}

hi('Angel');
hiV2('Dario');
