const somar = require('./default');

const concatenar2 = require('./default');

test('adds 1 + 2 to equal 3', () => {
    expect(somar(1, 2)).toBe(3);
});

test('adds to words and return another one', () => {
    expect(concatenar2('Walace', 'Luana')).toBe('WalaceELuana');
});