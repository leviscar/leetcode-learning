/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let left = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[left] = nums[i];
            left++;
        }
    }
    console.log(nums);
    return left;
};

module.exports = removeElement;