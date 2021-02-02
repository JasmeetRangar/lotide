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
const without = function(source, itemsToRemove){
  let outputArray = [];
  for(let i = 0 ; i < source.length ; i++) {
    let flag = 0;
    for(let j = 0 ; j < itemsToRemove.length ; j++) {
      if (source[i] === itemsToRemove[j]){
        flag = 1;
      }
    }
    if (flag === 0) {
      outputArray.push(source[i]);
    }
  }
  return outputArray;
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);