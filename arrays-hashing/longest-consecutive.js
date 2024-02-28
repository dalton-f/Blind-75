/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const numSet = new Set(nums);

  let maxCount = 0;

  for (const num of numSet) {
    let currNum = num;
    let count = 1;

    if (numSet.has(currNum - 1)) continue;

    while (numSet.has(currNum + 1)) {
      count++;
      currNum++;
    }

    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
};
