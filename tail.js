const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let arr1 = arr;
  return arr1.slice(1);
};

module.exports = tail;