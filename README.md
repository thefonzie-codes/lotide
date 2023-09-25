# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install thefonzie-codes/lotide`

**Require it:**

`const _ = require('thefonzie-codes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the head or first item in an array.
* `tail(array)`: Returns the original array, minus the head(or first item).
* `middle(array)`: Returns the middle item(s) in an array -- 1 if the array length is odd, 2 if even.
* `eqArrays(array1, array2)`: Returns true if arrays are identical and false if not.
* `assertEqual(item1, item2)`: Returns `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` if entries are equal, returns `🔴🔴🔴 Assertion Failed: ${actual} === ${expected}` if not.  Will only work on simple data types.
* `assertArraysEqual(array1, array2)`: Returns `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` if arrays are equal, returns `🔴🔴🔴 Assertion Failed: ${actual} === ${expected}` if not.  Will only work on arrays.
* `assertObjectsEqual(object1, object2)`: Returns `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` if objects are equal, returns `🔴🔴🔴 Assertion Failed: ${actual} === ${expected}` if not.  Will only work on objects.
* `countLetters(string)`: Counts the letters in a string and returns them in an object formatted {a: x, b: x,...}
* `countOnly(array, object)`: Takes an array and an object as parameters.  It will return an object that contains the counts of each item that had a truthy value in the input object.
* `eqObjects(object1, object2)`: Returns true if both input objects are identical. 
* `findKey(object, callback)`: Takes an object an a callback.  It will return the first key that returns a 'truthy' value.
* `findKeyByValue(object, value)`: Takes an object and a value. Will search for the first key that contains that value. 
* `letterPositions(string)`: Takes a string. It will identify all the separate letters in a string and return an object containing each letter's position. eg. "hello" will return{ h: [1], e: [2], l:[3, 4], o:[5]}
* `map(array, callback)`: Takes an array and a callback. The function will apply the callback to the array and return the modified array. 
* `takeUntil(array, callback)`: Takes an array and a callback.  It will iterate through the array until the entry returns a truthy value when compared to the callback. 
* `without(array1, array2)`: Takes 2 arrays. It will take each item in array 2, and if there are matching entries in array 1, they will be removed. It will return a copy of array1 without the matching entries.  It does not modify the original array.
