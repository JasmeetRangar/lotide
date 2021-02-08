const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
