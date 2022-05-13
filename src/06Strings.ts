export {};

let productTitle = 'My amazin product';
// productTitle = null;     // tipo null
// productTitle = () => {};     // tipo void;
// productTitle = 123;    // tipo number;
productTitle = 'My amazing product changed';
console.log('productTitle', productTitle);

const productDescription = 'I\'m bla bla bla bla aswerou ';
console.log('productDescription', productDescription);

let productPrice = 100;
let isNew: boolean = false;

const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
`;

console.log(summary);

const myString: string = '';

