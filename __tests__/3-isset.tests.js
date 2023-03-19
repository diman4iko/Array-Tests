import { get } from '../solutions/3-isset.js';

it('Проверка функции get()', () => {
  const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];

  const actual1 = get(cities, 0);
  expect(actual1).toBe('moscow');

  const actual2 = get(cities, 2, 'default');
  expect(actual2).toBe('berlin');

  const actual3 = get(cities, 7, false);
  expect(actual3).toBe(false);

  const actual4 = get(cities, -1, 'oops');
  expect(actual4).toBe('oops');

  const actual5 = get(cities, 7);
  expect(actual5).toBeNull();

  const actual6 = get(cities, 4);
  expect(actual6).toBe('');

  const actual7 = get(cities, 5, 'default');
  expect(actual7).toBeNull();

  const actual8 = get(cities, 6, 'default');
  expect(actual8).toBeUndefined();
});
