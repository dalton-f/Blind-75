/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const uniqueNums = new Set(nums);

  return uniqueNums.size !== nums.length;
};
