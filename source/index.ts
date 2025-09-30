import * as R from 'ramda';

export const greet = R.replace('{name}', R.__, "Hello, {name}!");

type color = -1 | 1;
type move = [number, number, color];
type value = 0 | color;

export const validate = ([x, y, color]: move, board: value[][]): boolean => true;