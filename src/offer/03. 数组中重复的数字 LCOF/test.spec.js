const tap = require('tap');
const findRepeatNumber = require('./index');

const nums1 = [2, 3, 1, 0, 2, 5, 3];
const res1 = 2;


tap.test('findRepeatNumberMap', t => {
    t.equal(findRepeatNumber.findRepeatNumberMap(nums1), res1);
    t.end();
});

tap.test('findRepeatNumberArr', t => {
    t.equal(findRepeatNumber.findRepeatNumberArr(nums1), res1);
    t.end();
});

tap.test('findRepeatNumberInplace', t => {
    t.equal(findRepeatNumber.findRepeatNumberInplace(nums1), res1);
    t.end();
});