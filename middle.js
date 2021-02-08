const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
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
module.exports = middle;
