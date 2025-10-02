import * as R from 'ramda';

export const greet = R.replace('{name}', R.__, "Hello, {name}!");

export const empty = 0;
export const black = -1;
export const white = 1;

export type Color = typeof black | typeof white;
// let pass: move - with coordinates outside the board
// let resign: move - with more than one stone
export type Move = [number, number, Color | Color[]];
export type Value = typeof empty | Color;
export type Board = Value[][];

export const validate = ([x, y, color]: Move, board: Board): boolean => true;