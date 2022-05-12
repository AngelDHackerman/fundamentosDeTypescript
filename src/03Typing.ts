//todo: (() => {}) ();    Esta es una funcion anonima autoejecutada, donde podemos meter todo nuestro codigo para que Ts no choque entre si.

(() => {
  let myProductName: string = 'Product 1';
  let myProductPrice: number = 123;

  myProductName = 'Changed';
  myProductName.toLowerCase();
  console.log(myProductName);

  myProductPrice.toFixed();


})();
