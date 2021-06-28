const tap = require('tap');
const removeElement = require('./index');

const nums1 = [3, 2, 2, 3];
const val1 = 3;
const res1 = 2;


tap.test('27 remove element', t => {
    t.equal(removeElement(nums1, val1), res1);
    t.end();
});