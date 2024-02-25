/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const numberIndexes = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;

    if (numberIndexes.has(complement))
      return [numberIndexes.get(complement), i];

    numberIndexes.set(currNum, i);
  }
};
