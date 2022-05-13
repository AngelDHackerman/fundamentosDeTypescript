export {};

let userId: string | number;

userId = 1212;
userId = 'asasa';

const greeting = (myText: string | number) => {
  if (typeof myText === 'string') {
    console.log(`string: ${myText.toLowerCase()}`);
  } else {
    console.log(`number: ${myText.toFixed(1)}`);
  }
};

greeting('asas');
greeting(1212.2839);
