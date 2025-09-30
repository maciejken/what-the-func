const { greet } = jest.requireActual('.');

describe('greet', () => {
    it('greets by name', () => {
        expect(greet('world')).toBe('Hello, world!');
    });
});