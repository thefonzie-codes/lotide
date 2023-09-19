// assertEqual function copied in

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
    }
  };

  // HEAD FUNCTION DEFINITION

  let array = [];

  const head = function(array) {
    return array[0];
  }

  // TESTS

  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head([]), 2);
  assertEqual(head(["Just me"]), "C'est moi");
