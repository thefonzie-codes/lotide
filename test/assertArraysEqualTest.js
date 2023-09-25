const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual')

console.log(assertEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]), '🟢🟢🟢 Assertion Passed: 1,2,3,4 === 1,2,3,4'));
console.log(assertEqual(assertArraysEqual([1, 'red'], [1, 'red']), '🟢🟢🟢 Assertion Passed: 1,red === 1,red'));
console.log(assertEqual(assertArraysEqual([1, 2], [1, 2, 3, 4]), '🔴🔴🔴 Assertion Failed: 1,2 === 1,2,3,4'));
console.log(assertEqual(assertArraysEqual([], []), '🟢🟢🟢 Assertion Passed:  === '));