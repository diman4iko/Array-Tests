import getSameCount from '../solutions/13-nested-loops.js';

it('getSameCount', () => {
  const actual1 = getSameCount([], []);
  expect(actual1).toBe(0);

  const actual2 = getSameCount([1, 2], []);
  expect(actual2).toBe(0);

  const actual3 = getSameCount([0], ['one', 'two']);
  expect(actual3).toBe(0);

  const actual4 = getSameCount([5, 3, 3], ['one', 'two']);
  expect(actual4).toBe(0);

  const actual5 = getSameCount([1, 2, 3], [2, 8, 10]);
  expect(actual5).toBe(1);

  const actual6 = getSameCount([1, 8, 2, 3], [2, 8, 10]);
  expect(actual6).toBe(2);

  const actual7 = getSameCount([1, 3, 2, 2], [3, 1, 1, 2]);
  expect(actual7).toBe(3);

  const actual8 = getSameCount([1, 1, 1, 2, 3], [1, 1]);
  expect(actual8).toBe(1);

  const actual9 = getSameCount([1, 1, 2, 3], [2, 3]);
  expect(actual9).toBe(2);
});
