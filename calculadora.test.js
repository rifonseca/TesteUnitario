import calculadora from "./calculadora";

describe('Testes unitários da calculadora', () => {

    test('Deve somar dois números', () => {
        expect(calculadora.somar(10, 5)).toBe(15);
    });

    test('Deve subtrair dois números', () => {
        expect(calculadora.subtrair(10, 5)).toBe(5);
    });

    test('Deve multiplicar dois números', () => {
        expect(calculadora.multiplicar(10, 5)).toBe(50);
    });

    test('Deve dividir dois números', () => {
        expect(calculadora.dividir(10, 5)).toBe(2);
    });

    test('Não deve permitir divisão por zero', () => {
        expect(() => calculadora.dividir(10, 0))
            .toThrow('Não é possível dividir por zero');
    });

});
