const somar = require('./default');

const concatenar2 = require('./default');

const retornolista = require('./default');

test('adds 1 + 2 to equal 3', () => {
    expect(somar(1, 2)).toBe(3);
});

test('adds to words and return another one', () => {
    expect(concatenar2('Walace', 'Luana')).toBe('WalaceLuana');
});

//uso de mocks
test("verify return from list", ()=>{
    let mockCallback = jest.fn(x => 42 + x);
    retornolista([0, 1, 2, 3, 1], mockCallback);
    //expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls.length).toBe(0);
});
