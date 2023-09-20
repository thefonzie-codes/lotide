
// FUNCTION DEFINITION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

// TEST CODE

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
assertEqual("WakeWater","CakeWater");
assertEqual("Blink 182", "Blink 182");