const assert = require('chai').assert;

const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words); // no need to capture the return value since we are not checking it
  it("returns [] for [1, 2, 3]", () => {
    assert.equal(words.length, 3);
  });
  it("returns [3] for [1, 2, 3, 4, 5]" , () => {
    assert.deepEqual(tail(words),["Lighthouse", "Labs"]); 
  });  
});
