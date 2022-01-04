import { isPrime } from '../games/brain-prime.js';

test('is prime', () => {
  expect(isPrime(3)).toEqual(true);
  expect(isPrime(47)).toEqual(true);
  expect(isPrime(149)).toEqual(true);
});

test('is not prime', () => {
  expect(isPrime(1)).toEqual(false);
  expect(isPrime(4)).toEqual(false);
  expect(isPrime(33)).toEqual(false);
});
