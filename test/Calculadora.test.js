const calcularClass = require('../src/Calculadora');

beforeEach(() => {
    this.calcularClassteste = new calcularClass();
});

test('adds 1 + 2 to equal 3', () => {
    expect(this.calcularClassteste.calcular('+',1,2)).toBe(3);
});

test('subtract 2 from 1 equal to 1', () => {
    expect(this.calcularClassteste.calcular('-',2,1)).toBe(1);
});