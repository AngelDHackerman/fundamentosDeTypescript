// var _ = require('loadash');    // libreria que es para JS

//todo: Asi usariamos las librerias que no tienen soporte para TS:

import _ from 'lodash'; // ? Esto no funciona a la primera debemos usar: npm i --save-dev @types/lodash, y eso nos lo sugiere TS

const data = [
  {
    username: 'angel',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role); // aqui le decimos que agrupe los valores por su role.
console.log(rta);
