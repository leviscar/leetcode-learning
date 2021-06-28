/**
 * @param {Array} nums
 * @return {Number} repeatNum
 */
// hashmap解法
const findRepeatNumberMap = function (nums) {
    const numMap = {};

    for (let i = 0, len = nums.length; i < len; i++) {
        if (numMap.hasOwnProperty(nums[i])) {
            return nums[i];
        }
        numMap[nums[i]] = 1;
    }
    return false;
};

const findRepeatNumberArr = function (nums) {
    const len = nums.length;
    const originArr = new Array(len);
    originArr.fill(-1);

    for (let i = 0; i < len; i++) {
        if (originArr[nums[i]] !== -1) {
            return nums[i];
        }
        originArr[nums[i]] = i;
    }
};

// 原地替换类型
const findRepeatNumberInplace = function (nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        while (i !== nums[i]) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }

            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;
        }
    }
};

module.exports = {
    findRepeatNumberMap,
    findRepeatNumberArr,
    findRepeatNumberInplace,
};