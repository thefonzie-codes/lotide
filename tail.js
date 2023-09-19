// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

//

let array = [];

// tail function definition

const tail = function(array) {
  return array.slice(1);
};

// TESTS

array = ["Yo yo", "Lighthouse", "Labs"];
console.log(tail(array));
assertEqual(array.length, 3);

array = [];
console.log(tail(array));
assertEqual(array.length, 0);

array = [1];
console.log(tail(array));
assertEqual(array.length, 0);
