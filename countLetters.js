const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str) {
  let outputObj = {};
  for (let char of str) {
    let keys = Object.keys(outputObj);
    if (char !== " ") {
      if (keys.includes(char)) {
        outputObj[char]++;
      } else {
        outputObj[char] = 1;
      }
    }
  }
  return outputObj;
};
const output = countLetters("lighthouse in the house");
assertEqual(output["h"], 4);