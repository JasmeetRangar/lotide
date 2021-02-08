const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
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