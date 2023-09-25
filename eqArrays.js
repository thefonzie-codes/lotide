const assertEqual = require("./assertEqual");

// Implement a function that takes in 2 arrays and returns true or false based on a PERFECT match

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

module.exports = eqArrays;

