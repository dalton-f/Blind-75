/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const numberIndexes = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;

    if (numberIndexes[complement] !== undefined)
      return [numberIndexes[complement], i];

    numberIndexes[currNum] = i;
  }

  console.log(numberIndexes);
};
