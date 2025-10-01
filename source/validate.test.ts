import { black as x, white as o, empty as _, board, validate } from ".";

describe('validate', () => {
  it('returns true if stone is put on empty board', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], b)).toBe(true);
  });

  it('returns false if stone is put on non-empty point', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], b)).toBe(false);
  });

  it('returns true if black stone is put on empty point next to point occupied by white', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([3, 2, x], b)).toBe(true);
  });

  it('returns false if black stone is put on single empty point surrounded by white stones', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, o, _, o, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([2, 2, x], b)).toBe(false);
  });

  it('returns true if black passes', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, o, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([-1, -1, x], b)).toBe(true);
  });

  it('returns true if white passes', () => {
    const b: board = [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, o, _],
      [_, _, x, _, _],
      [_, _, _, _, _],
    ];

    expect(validate([-1, -1, o], b)).toBe(true);
  });
})