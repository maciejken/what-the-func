import * as R from 'ramda';

export const greet = R.replace('{name}', R.__, "Hello, {name}!");

export const empty = 0;
export const black = -1;
export const white = 1;

export type color = typeof black | typeof white;
export type move = [number, number, color];
// let pass: move - with coordinates outside the board
export type value = typeof empty | color;
export type board = value[][];

export const validate = ([x, y, color]: move, board: value[][]): boolean => true;