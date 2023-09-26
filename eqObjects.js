const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {

  for (let key in object1) {

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};



const compObj1 = {
  CPU: "Ryzen 7800X3D",
  RAM: 32,
  GPU: "7800 XTX"
}
const compObj2 = {
  RAM: 32,
  CPU: "Ryzen 7800X3D",
  GPU: "7800 XTX"
}

console.log(eqObjects(compObj1, compObj2));

const mouseObj1 = {
  brand : "Logitech",
  model : "GPX",
  color : "pink"
}

console.log(eqObjects(compObj1, mouseObj1));

const mouseObj2 = {
  brand : "Logitech",
  model : "GPX",
  sensor : 3395
}

console.log(eqObjects(mouseObj2, mouseObj1));

const mouseObj3 = {
  brand : "Logitech",
  model : "GPX",
  color : ["black", "white"]
}

const mouseObj4 = {
  brand : "Logitech",
  model : "GPX",
  color : ["black", "white"]
}

console.log(eqObjects(mouseObj3, mouseObj4));


module.exports = eqObjects;