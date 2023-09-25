const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail")

console.log(assertArraysEqual(tail(["Yo yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));

console.log(assertArraysEqual(tail([]), []));

console.log(assertArraysEqual(tail([1]), []));
