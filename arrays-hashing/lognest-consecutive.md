# Intuition

The start of a sequence refers to a number in an array where the array does not contain number - 1

# Approach

Convert the numbers array into a set, which removes duplicates and makes look-ups more efficient. Loop over each number in the set, checking if the set contains number - 1.

If it doesn't contain number - 1, we can assume that we are at the start of a sequence and loop forward until the next consecutive value does not exist in the set while keeping track of the streak.

After each set of consecutive numbers, update the max streak we have seen so far.

# Complexity

- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code

```
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
```
