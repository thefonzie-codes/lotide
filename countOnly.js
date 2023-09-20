// ASSERT EQUAL

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} === ${expected}`);
  }
};

//

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

let trueKeys =  function (obj) {
  let keys = {};
  for (let each in obj) {
    if (obj[each] === true) {
      keys[each] = obj[each]
    }
  }
  return keys;
}

console.log(trueKeys({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

//console.log(trueKeys({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));


const countOnly = function(allItems, itemsToCount) {

  counts = {};

  


} 
  
    //we check to see if a value exists
    //we create a key for each new value and assign it a value of 0
    //if value exists increment count by 1

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//result1 = {"Jason: 1"}

console.log(result1);

/*

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

*/