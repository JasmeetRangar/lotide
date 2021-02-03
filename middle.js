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
const moreThanTwoElements = function(array) {
  if (array.length > 2) {
    true;
  }
  else return false;
}
const isEven = function(array) {
  if (array.length % 2 === 0) {
    true;
  }
  else return false;
}
const middle = function(array) {
  const outputArray = [];
  if (moreThanTwoElements(array) === false) {
    return outputArray;
  }
  if (isEven(array) === false) {
    outputArray.push(array[(array.length - 1) / 2]);
    return outputArray;
  }
  else {
    outputArray.push(array[array.length / 2 - 1]);
    outputArray.push(array[array.length / 2]);
    return outputArray;
  }
}
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);