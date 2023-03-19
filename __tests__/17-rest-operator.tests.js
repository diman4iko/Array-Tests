import { getMax } from '../solutions/17-rest-operator.js';

test('max', () => {
  expect(getMax([])).toEqual(null);
  expect(getMax([1, 10, 8])).toEqual(10);
  expect(getMax([11, -3, 8, 1])).toEqual(11);
  expect(getMax([1, 8, -3, 11])).toEqual(11);
});
