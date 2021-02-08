const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([3,2,1]),3);
assertEqual(head([3,2,1]),2);