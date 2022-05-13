export {}

let isEnable = true;
// isEnable = 'as';
// isEnable = 1212;
isEnable = false;

let isNew: boolean = false;
console.log('is New', isNew);
isNew = true;
console.log('is New', isNew);

const random = Math.random();
console.log('random', random);
isNew = random >= 0.5 ? true : false;
console.log('isNew', isNew);

const aleatorio = () => {
  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
}

aleatorio();
