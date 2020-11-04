import genDiff from './gendiff.js';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const diff = genDiff('./f1.json', './f2.json');
console.log(diff);

export {
  add as default, sub, mult, div,
};
