/* eslint-disable max-len */

const average = require('../src/average');

describe('Test `average`', () => {
  it('Retorna a média dos valores', () => {
    expect(average([3, 4, 5])).toEqual(4);
    expect(average([0, 0, 0, 0, 0, 0, 0])).toEqual(0);    
    expect(average([1, 2, 3])).toEqual(2);
    expect(average([0, 0, 0, 0, 0, 0, 1])).toEqual(0);    
    expect(average([47, 63, 122])).toEqual(77);

    expect(average([-11, 2, 5])).toEqual(-1);    
    expect(average([-11, -5, 2])).toEqual(-5);
  });

  it('Retorna `undefined` se o array conter valores não numéricos', () => {
    expect(average([1, 2, 3, '4', 5])).toBeUndefined();
    expect(average(['um', 'dois', 'tres'])).toBeUndefined();
    expect(average([1, 2, '3'])).toBeUndefined();
    expect(average([' '])).toBeUndefined();
  });

  it('Retorna `undefined` se o array estiver vazio', () => {
    expect(average([])).toBeUndefined();
  });
});
