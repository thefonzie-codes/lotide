// TEST/ASSERTION FUCNTIONS

//

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

//

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));
//console.log(assertArraysEqual([1, 2, , 4], [1, 2, 3, 4]));

////////////
// TEST CODE

const middle = function(array) {
  
  let mid = [];
  let length = array.length;
  let half = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) {
    mid.push(array[half]);
    return mid;
  }
  mid.push(array[half - 1], array[half]);
  return mid;
}

//console.log(middle([1, 2, 3, 4, 5, 6]))

console.log(assertArraysEqual(middle([1, 2, 4]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]
console.log(assertArraysEqual(middle([5, 10, 15, 'Junkrat', 'Soldier 76', 'Cars']), [15, 'Junkrat'])); // => [15, 'Junkrat']
