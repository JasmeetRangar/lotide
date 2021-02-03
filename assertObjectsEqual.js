const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys = Object.keys(object1);
  let flag = 0;
  let arrayFlag = 0;
  for (let key of keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        arrayFlag = 1;
      }
    } else {
      if (object1[key] !== object2[key]) {
        flag = 1;
      }
    }
  }
  keys = Object.keys(object2);
  for (let key of keys) {
    if (Array.isArray(object2[key])) {
      if (!eqArrays(object2[key], object1[key])) {
        arrayFlag = 1;
      }
    } else {
      if (object2[key] !== object1[key]) {
        flag = 1;
      }
    }
  }
  if (flag === 0 && arrayFlag === 0) {
    return true;
  } else {
    return false;
  }
};
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false