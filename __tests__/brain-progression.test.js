import { test, expect } from '@jest/globals';
import { getProgression, hideRandomItem } from '../games/brain-progression.js';

test('get progression', () => {
  expect(getProgression(0, 0, 0)).toEqual([]);
  expect(getProgression(5, 2, 0)).toEqual([0, 2, 4, 6, 8]);
  expect(getProgression(5, 6, 15)).toEqual([15, 21, 27, 33, 39]);
});

test('hide random item', () => {
  const progression = getProgression(5, 2, 0);
  expect(typeof hideRandomItem(progression)).toEqual('number');
  expect(progression).toContain('..');
});
