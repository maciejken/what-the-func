import * as R from 'ramda';

const greet = R.replace('{name}', R.__, "Hello, {name}!")

console.log(greet('world'));