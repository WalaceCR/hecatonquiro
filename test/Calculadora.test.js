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

test('multiply 2 times 1 then the result will equal 2', () => {
    expect(this.calcularClassteste.calcular('x',2,1)).toBe(2);
});

test('divide 2 by 2 then result will be equal to 1', () => {
    expect(this.calcularClassteste.calcular('/',2,2)).toBe(1);
});

test('Must return undefined', () => {
    expect(this.calcularClassteste.calcular('10',2,2)).toBe('Undefined');
});