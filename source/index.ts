import * as R from 'ramda';

export const greet = R.replace('{name}', R.__, "Hello, {name}!");