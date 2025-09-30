const { validate } = jest.requireActual('.');

describe('validate', () => {
  it('returns true if move is valid', () => {
    const move = [2, 2, -1];
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(validate(move, board)).toBe(true);
  });

    it('returns false if move is invalid', () => {
    const move = [2, 2, -1];
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(validate(move, board)).toBe(false);
  });
})