import getSuperSeriesWinner from '../solutions/10-nested-arrays.js';

test('super series 1', () => {
  const scores = [
    [3, 7],
    [4, 1],
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
  ];

  const result = getSuperSeriesWinner(scores);
  expect(result).toBe('canada');
});

test('super series 2', () => {
  const scores = [
    [3, 3],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 3],
    [2, 5],
    [4, 4],
    [2, 3],
  ];

  const result = getSuperSeriesWinner(scores);
  expect(result).toBe('ussr');
});

test('super series 3', () => {
  const scores = [
    [3, 2],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 2],
    [2, 4],
    [4, 2],
    [2, 4],
  ];

  const result = getSuperSeriesWinner(scores);
  expect(result).toBeNull();
});

test('super series 4', () => {
  const scores = [
    [3, 3],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 3],
    [2, 5],
    [4, 4],
    [4, 3],
  ];

  const result = getSuperSeriesWinner(scores);
  expect(result).toBe('ussr');
});
