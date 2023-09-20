/////

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

/////

const countLetters = function(string) {
  
  const count = {};
  let lowerCaseString = string.toLowerCase();

  for (let letter of lowerCaseString) {
    
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] ++;
    } 
  }
  return count;
}

let string = "What's up"
console.log(countLetters(string));

console.log(assertEqual(countLetters("Hiya"), { h: 1, i: 1, y: 1, a: 1})); // will fail as assertEqual does not take objects into account