const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([3,2,1]),3); //pass
assertEqual(head([3,2,1]),2); //fail