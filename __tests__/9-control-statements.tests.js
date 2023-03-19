import getTotalAmount from '../solutions/9-control-statements.js';

describe('Проверка фукнкции GgetTotalAmount()', () => {
  it('#test 1', () => {
    const money = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
    expect(getTotalAmount(money, 'usd')).toBe(16);
  });

  it('#test 2', () => {
    const money = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
    expect(getTotalAmount(money, 'eur')).toBe(135);
  });

  it('#test 3', () => {
    const money = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
    expect(getTotalAmount(money, 'rub')).toBe(270);
  });
});