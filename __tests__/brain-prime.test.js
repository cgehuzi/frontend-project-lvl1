import { test, expect } from '@jest/globals';
import { isPrime } from '../games/brain-prime.js';

test('prime', () => {
  expect(isPrime(1)).toEqual(false);
  expect(isPrime(3)).toEqual(true);
  expect(isPrime(4)).toEqual(false);
  expect(isPrime(33)).toEqual(false);
  expect(isPrime(47)).toEqual(true);
  expect(isPrime(149)).toEqual(true);
});
