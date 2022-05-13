export {};

type UserID = string | number;
let userId: UserID;


// ?  Lieteral types

type Sizes = 'S' | 'M' | 'L' | 'XL';      // * esto es un tipo Literal
let shirtSize: Sizes;
shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';
// shirtSize = 'a;slkdfuqwopi4e';   // esto no seria valido


const greeting = (userId: UserID, size: Sizes) => {
  if (typeof userId == 'string') {
    console.log(`string: ${userId.toLowerCase()} camisa talla: ${size}`);
  } else {
    console.log(`number: ${userId.toFixed()} camisa talla: ${size}`)
  }
}
greeting(1112, 'L');
