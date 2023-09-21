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
    for (let i = 0; i < string.length; i++) {

      const char = string[i];

      if (char !== ' ') {
       if(!results[char]) {
        results[char] = []
       }
       results[char].push(i + 1);
    }
  }
  return results;
}
string = "lighthouse in the house"

console.log(letterPositions(string));

console.log(assertEqual(letterPositions("hello")), { h: [1], e: [2], l:[3, 4], o:[5]});
