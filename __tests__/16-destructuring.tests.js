import { getTheNearestLocation } from '../solutions/16-destructuring.js';

test('getTheNearestLocation', () => {
  const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];

  const currentPoint = [5, 5];

  const result = getTheNearestLocation([], currentPoint);
  expect(result).toBeNull();

  const result2 = getTheNearestLocation(locations, currentPoint);
  expect(result2).toEqual(['Museum', [8, 4]]);

  const currentPoint2 = [1, 3];

  const result3 = getTheNearestLocation(locations, currentPoint2);
  expect(result3).toEqual(['Sea', [1, 3]]);

  const locations2 = [
    ['Hotel', [7, 3]],
    ['Square', [5, 6]],
  ];

  const result4 = getTheNearestLocation(locations2, currentPoint2);
  expect(result4).toEqual(['Square', [5, 6]]);
});
