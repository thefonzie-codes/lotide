const findKeyByValue = function(object, valueToFind) {

  // iterate through each value
  // by iterating through each key
  for (let key in object) {
    if (object[key] === valueToFind) {
      return key;
    }
  }
  // compare value to input
  // if the same, return key
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;