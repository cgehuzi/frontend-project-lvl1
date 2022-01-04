import { test, expect } from '@jest/globals';
import { getGreatestDivisor } from '../games/brain-gcd.js';

test('greatest divisor', () => {
  expect(getGreatestDivisor(26, 13)).toEqual(13);
  expect(getGreatestDivisor(96, 32)).toEqual(32);
  expect(getGreatestDivisor(2, 3)).toEqual(1);
  expect(getGreatestDivisor(93, 27)).toEqual(3);
});
