# Intuition

A string contains duplicates if the set of an array is smaller than the array itself

# Approach

The Set object lets you store unique values of any type, whether primitive values or object references. A value may only occur once. By converting the nums array into a set, we will automatically get rid of any duplicate values.

This can then be used to check the final size against the original array length - if they are not equal, we can assume that some numbers were removed due to them being duplicates.

# Complexity

- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = nums => {
    const uniqueNums = new Set(nums);

    return uniqueNums.size !== nums.length;
};
```
