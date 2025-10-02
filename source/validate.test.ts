import { black as x, white as o, empty as _, type Board, validate } from ".";

describe('validate', () => {
  it('returns true if stone is put on empty board', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], board)).toBe(true);
  });

  it('returns false if stone is put on non-empty point', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], board)).toBe(false);
  });

  it('returns true if black stone is put on empty point next to point occupied by white', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([3, 2, x], board)).toBe(true);
  });

  it('returns false if black stone is put on single empty point surrounded by white stones', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, o, _, o, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], board)).toBe(false);
  });

  it('returns true if white stone is put on single empty point surrounded by white stones', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, o, _, o, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, o], board)).toBe(true);
  });

  it('returns true if black stone is put in one-point white eye in a corner surrounded by black stones (in atari)', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [x, x, _, _, _],
      [o, o, x, _, _],
      [_, o, x, _, _],
    ];

    expect(validate([0, 0, x], board)).toBe(true);
  });

  it('returns false if black stone is put in two-point white eye in a corner surrounded by black stones (2 liberties left)', () => {
    const board: Board = [
      [_, _, _, _, _],
      [x, x, _, _, _],
      [o, o, x, _, _],
      [x, o, x, _, _],
      [_, o, _, _, _],
    ];

    expect(validate([0, 0, x], board)).toBe(false);
  });

  it('returns true if black stone is put on one-point white eye in on first line surrounded by black stones', () => {
    const board: Board = [
      [x, x, x, _, _],
      [o, o, x, _, _],
      [_, o, x, _, _],
      [o, o, x, _, _],
      [x, x, x, _, _],
    ];

    expect(validate([0, 2, x], board)).toBe(true);
  });

  it('returns true if black stone is put on one-point white eye in the centre surrounded by black stones', () => {
    const board: Board = [
      [x, x, x, _, _],
      [x, o, o, x, x],
      [x, o, _, o, x],
      [x, o, o, o, x],
      [x, x, x, x, x],
    ];

    expect(validate([0, 2, x], board)).toBe(true);
  });

  it('returns true if black passes', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([NaN, NaN, x], board)).toBe(true);
  });

  it('returns true if white passes', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, o, _],
      [_, _, x, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([NaN, NaN, o], board)).toBe(true);
  });

  it('returns true if black resigns', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([0, 0, [x, x]], board)).toBe(true);
  });

  it('returns true if white resigns', () => {
    const board: Board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, o, _],
      [_, _, x, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([0, 0, [o, o]], board)).toBe(true);
  });
})