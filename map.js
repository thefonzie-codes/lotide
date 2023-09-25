// code for epArrays

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

/////

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

// TEST 1

const numbers = [1, 3, 5, 7, 9]

const newNumbers = map(numbers, number => number * number);

console.log(assertArraysEqual(newNumbers, [1, 9, 25, 49, 81]));

//// TEST 2

const names = ['Becca', 'Taylor', 'Olga', 'Ashley', 'Chris'];

const makeSquids = map(names, name => name + " is a Squid.");

console.log(assertArraysEqual(makeSquids, [
  'Becca is a Squid.',
  'Taylor is a Squid.',
  'Olga is a Squid.',
  'Ashley is a Squid.',
  'Chris is a Squid.'
]));

const randomArray = [1, 2, "5", "yes", 6]

const stringOrNum = map(randomArray, input => (typeof input === "string") ? `${input} is a string` : `${input} is a number`);

console.log(assertArraysEqual(stringOrNum, [
'1 is a number',
  '2 is a number',
  '5 is a string',
  'yes is a string',
  '6 is a number'
]));

module.exports = map;