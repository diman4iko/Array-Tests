import getSameParity from '../solutions/8-removing.js';

it('Проверка фукнкции getSameParity()', () => {
  const result1 = getSameParity([]);
  expect(result1).toEqual([]);

  const result2 = getSameParity([1, 2, 3]);
  expect(result2).toEqual([1, 3]);

  const result3 = getSameParity([1, 2, 8]);
  expect(result3).toEqual([1]);

  const result4 = getSameParity([2, 2, 8]);
  expect(result4).toEqual([2, 2, 8]);

  const result5 = getSameParity([1, 2, -3]);
  expect(result5).toEqual([1, -3]);

  const result6 = getSameParity([-3, 2, 1]);
  expect(result6).toEqual([-3, 1]);

  const result7 = getSameParity([4, 1, 8]);
  expect(result7).toEqual([4, 8]);
});
