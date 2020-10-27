import { expect, test } from '@jest/globals';
import add, { sub, mult, div } from './func.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('sub 10 - 10 to equal 0', () => {
  expect(sub(10, 10)).toBe(0);
});

test('mult 10 * 10 to equal 100', () => {
  expect(mult(10, 10)).toBe(100);
});

test('div 10 / 10 to equal 1', () => {
  expect(div(10, 10)).toBe(1);
});
