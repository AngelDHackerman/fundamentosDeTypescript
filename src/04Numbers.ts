export {}

let productPrice = 100;
productPrice = 12;
console.log('productPrice', productPrice);

let customerAge: number = 28;
customerAge = customerAge + 1;
console.log('customerAge', customerAge);

let productInStock: number;
productInStock = 11;
console.log('productInStock', productInStock);
if (productInStock > 10 ) {
  console.log('is greater');
};

let discount = parseInt('100');
console.log('discount', discount, typeof(discount));
if (discount <= 200) {
  console.log('apply');
} else {
  console.log('not apply');
}


let hex = 0xfff;    // 4095 en numero hexadecimal
console.log('hex', hex, typeof(hex));

let bin = 0b1010; // 10 en numero binario
console.log('bin', bin, typeof(bin));

// ! El tipado se debe hacer con las minusculas no mayusculas: number ok, Number not ok.
