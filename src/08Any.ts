export {};

let myDynamicVar: any;
myDynamicVar = 100;
myDynamicVar = null;
myDynamicVar = {};
myDynamicVar = '';

myDynamicVar = 'Hola';

// ? Esto es hacer cast, o casteo o casting en Ts

const rta = (myDynamicVar as string).toLowerCase(); // has que 'rta' sea tratado como un string.
console.log(rta);

// ? Otra forma de hacer cast en Ts.
myDynamicVar = 12345;
const rta2 = (<number>myDynamicVar).toFixed();
console.log(rta2)
