import { getExpResult } from '../games/brain-calc.js';

test('wrong expression', () => {
  expect(getExpResult('/', 0, 0)).toEqual(null);
});

test('expression result', () => {
  expect(getExpResult('+', 0, 0)).toEqual(0);
  expect(getExpResult('+', 25, 20)).toEqual(45);
  expect(getExpResult('-', 0, 0)).toEqual(0);
  expect(getExpResult('-', 25, 20)).toEqual(5);
  expect(getExpResult('*', 0, 0)).toEqual(0);
  expect(getExpResult('*', 25, 20)).toEqual(500);
});
