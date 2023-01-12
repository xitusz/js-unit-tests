/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('Test `circle`', () => {
  it('Retorna um objeto contendo os valores esperados', () => {
    // Retorna undefined se o parâmetro não for um número.
    expect(circle(isNaN)).toBeUndefined();
    // Teste se circle retorna um objeto.
    expect(typeof circle(1)).toBe('object');
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(1)).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    expect(Object.values(circle(2))[2]).toEqual(12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    expect(Object.values(circle(3))[1]).toEqual(28.259999999999998);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toEqual({radius: 3, area: 28.259999999999998, circumference: 18.84});
  });
});
