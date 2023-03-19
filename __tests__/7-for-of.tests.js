import calculateAverage from '../solutions/7-for-of.js';

describe('Проверка функции calculateAverage()', () => {
  it('#calculate', () => {
    const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
    expect(calculateAverage(temperatures1)).toBe(38.5);

    const temperatures2 = [36, 37.4, 39, 41, 36.6];
    expect(calculateAverage(temperatures2)).toBe(38);
  });

  it('#should be null', () => {
    const temperatures = [];
    expect(calculateAverage(temperatures)).toBeNull();
  });
});
