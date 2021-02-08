const assertEqual = require('./assertEqual')
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const outputObj = {};
  const keys = Object.keys(itemsToCount);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    if (itemsToCount[keys[i]] === true) {
      let count = 0;
      for (let j = 0; j < allItems.length; j++) {
        if (allItems[j] === keys[i]) {
          count++;
        }
      }
      if (count > 0) {
        outputObj[keys[i]] = count;
      }
    }
  }
  return outputObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
