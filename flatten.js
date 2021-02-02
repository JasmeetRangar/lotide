const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }    
  }
  return true;
}
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const flatten = function(arr) {
  let output = [];
  for(let i = 0 ; i < arr.length ; i++) {
    if (Array.isArray(arr[i])) {
      for(let j = 0 ; j < arr[i].length ; j++) {
      output.push(arr[i][j]);
      }
    }
    else {
      output.push(arr[i]);
    }    
  }
  return output;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));