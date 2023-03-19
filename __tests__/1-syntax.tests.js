import { getWeekends } from '../solutions/1-syntax.js';

test('Проверка функции getWeekends()', () => {
  expect(getWeekends()).toEqual(['saturday', 'sunday']);
  expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
  expect(getWeekends('short')).toEqual(['sat', 'sun']);
});