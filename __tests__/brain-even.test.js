import { isEven } from '../games/brain-even.js';

test('is even', () => {
  expect(isEven(0)).toEqual(true);
  expect(isEven(2)).toEqual(true);
  expect(isEven(86)).toEqual(true);
});

test('is not even', () => {
  expect(isEven(3)).toEqual(false);
  expect(isEven(97)).toEqual(false);
});
