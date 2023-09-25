// FUNCTION DEFINITION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

// 

const letterPositions = function(string) {
  
  const results = {};

  for (const i in string) {
    const char = string[i];

    if (char === ' ') {
      continue;
      }

    if(!results[char]) {
      results[char] = []
      }

    results[char].push(i);
    }
    return results;
  };

string = "lighthouse in the house"

console.log(letterPositions(string));

console.log(letterPositions("hello"));

console.log(assertEqual(letterPositions("hello")), { h: [1], e: [2], l:[3, 4], o:[5]});

module.exports = letterPositions;
