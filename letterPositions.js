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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const letterPositions = function(str) {
  let outputObj = {};
  for (let i = 0; i < str.length; i++) {
    let keys = Object.keys(outputObj);
    if (str[i] !== " ") {
      if (keys.includes(str[i])) {
        outputObj[str[i]].push(i);
      } else {
        outputObj[str[i]] = [i];
      }
    }
  }
  return outputObj;
};
const output = letterPositions("lighthouse in the house");
assertArraysEqual(output["h"], [ 3, 5, 15, 18 ]);