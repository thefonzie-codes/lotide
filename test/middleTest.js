const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 4]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]
console.log(assertArraysEqual(middle([5, 10, 15, 'Junkrat', 'Soldier 76', 'Cars']), [15, 'Junkrat'])); // => [15, 'Junkrat']
