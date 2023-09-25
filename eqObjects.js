const eqObjects = function(obj1, obj2) {

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  
  if (obj1Keys.length !==  obj2Keys.length) {
    return false;
  }

  for (let each1 of obj1Keys) {
    if (obj1[each1] !== obj2[each1]) {// if values are not equal
      if (Array.isArray(obj1[each1])) { // checks to see if any value is an array
        if (eqArrays(obj1[each1], obj2[each1]) === false) { //checks if the arrays match
          return false; // if false returns false
        }
      } else {
        return false; // if false returns false
      }
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