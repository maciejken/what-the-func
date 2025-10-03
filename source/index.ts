import * as R from 'ramda';

export const greet = R.replace('{name}', R.__, "Hello, {name}!");

export const empty = 0;
export const black = -1;
export const white = 1;

export type Color = typeof black | typeof white;
// let pass: move - with NaN coordinates
// let resign: move - with more than one stone
export type Move = [number, number, Color | Color[]];
export type Value = typeof empty | Color;
export type Board = Value[][];


function cloneBoard(board: Board): Board {
  return board.map(row => [...row]);
}


function countLiberties(board: Board, group: number[][]): number {
  const liberties = new Set<string>();
  const size = board.length;

  for (const [groupX, groupY] of group) {
    for (const [neighborX, neighborY] of getNeighbors([groupX, groupY], size)) {
      if (board[neighborY][neighborX] === empty) {
        liberties.add(`${neighborX},${neighborY}`);
      }
    }
  }

  return liberties.size;
}

function removeCapturedStones(board: Board, color: Color): void {
  const size = board.length;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (board[y][x] === color) {
        const group = getGroup([x, y, color], board);
        if (countLiberties(board, group) === 0) {
          for (const [groupX, groupY] of group) {
            board[groupY][groupX] = empty;
          }
        }
      }
    }
  }
}

function getNeighbors([x, y]: number[], size: number): number[][] {
  const neighbors: number[][] = [];
  if (x > 0) neighbors.push([x - 1, y]);
  if (x < size - 1) neighbors.push([x + 1, y]);
  if (y > 0) neighbors.push([x, y - 1]);
  if (y < size - 1) neighbors.push([x, y + 1]);
  return neighbors;
}

function getGroup([x, y, color]: Move, board: Board): number[][] {
  const visited = new Set<string>();
  const group: number[][] = [];
  const stack = [[x, y]];
  const size = board.length;

  while (stack.length) {
    const [poppedX, poppedY] = stack.pop()!;
    const key = `${poppedX},${poppedY}`;
    if (visited.has(key)) continue;
    visited.add(key);
    group.push([poppedX, poppedY]);

    for (const [neighborX, neighborY] of getNeighbors([poppedX, poppedY], size)) {
      if (board[neighborY][neighborX] === color) {
        stack.push([neighborX, neighborY]);
      }
    }
  }

  return group;
}

export const validate = ([x, y, color]: Move, board: Board): boolean => {
  if (Array.isArray(color)) {
    return true;
  } else if (isNaN(x)) {
    return true;
  }

  if (board[y][x] !== empty) return false;

  const testBoard = cloneBoard(board);
  testBoard[y][x] = color;

  const opponentColor: Value = color === black ? white : black;
  removeCapturedStones(testBoard, opponentColor);

  const group = getGroup([x, y, color], testBoard);
  const liberties = countLiberties(testBoard, group);

  if (liberties === 0) return false; // suicide

//   if (previousBoard && JSON.stringify(testBoard) === JSON.stringify(previousBoard)) {
//     return false; // Ko rule
//   }

  return true;
};