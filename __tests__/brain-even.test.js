import { test, expect } from '@jest/globals';
import { isEven } from '../games/brain-even.js';

test('even', () => {
  expect(isEven(0)).toEqual(true);
  expect(isEven(2)).toEqual(true);
  expect(isEven(3)).toEqual(false);
  expect(isEven(86)).toEqual(true);
  expect(isEven(97)).toEqual(false);
});
