const findKey = function (object, callback) {

  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

/// Test 1

let phone1 = {
  brand: "nokia",
  model: "3310",
  colour: "black"
};

let blackPhone = findKey(phone1, color => color === "black");

console.log(assertEqual((blackPhone), 'colour'));

/// Test 2

let cpu = {
  cpu: "13700k",
  clock: 3.7,
  boost: 5,
};

let over5k = findKey(cpu, boost => boost > 4);
console.log(assertEqual((over5k), 'boost'))

module.exports = findKey;