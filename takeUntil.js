//

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

//

const takeUntil = function(array, callback) {
  const results = [];
  //iterate over given array
  for(let each of array){
    if (!callback(each)) {
      results.push(each);
    } else {
      break;
    }
  }
  return results;
}

//

let mice = ["Razer", "Logitech", "Razer", "Logitech", "Lamzu", "Pulsar"];
let untilLamzu = takeUntil(mice, mouse => mouse === "Lamzu");
console.log(assertArraysEqual(untilLamzu, ["Razer", "Logitech", "Razer", "Logitech"]));

//

let numbers = [7, 25, 33, 41, 480, 21, 365, 525600];
let divByFourAndTwo = takeUntil(numbers, number => number % 4 === 0 && number % 2 === 0);
console.log(assertArraysEqual(divByFourAndTwo, [7, 25, 33, 41]));

