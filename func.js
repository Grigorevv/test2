import genDiff from '../backend-project-lvl2/gendiff.js';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const diff = genDiff('/home/viktor/test2/f1.json', '/home/viktor/test2/f2.json');
console.log(diff);

export {
  add as default, sub, mult, div,
};
