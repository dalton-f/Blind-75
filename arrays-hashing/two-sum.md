# Intuition

The two numbers that add up to a target will be num n and target - num n.

We can assume there is one solution, so a case of [-1, -1] does not need to be accounted for.

# Approach

Create a hashmap with key value pairs of a number and its corresponding index in the nums array.

Loop over the nums array and get the complement number for each number - the complement will always be the only number that we need to look for.

Check if it already exists in the hashmap, return the current index and the index from the map.

If it doesn't exist, add it to the hashmap

# Complexity

- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const numberIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        const complement = target - currNum;

        if (numberIndexes[complement] !== undefined) return [numberIndexes[complement], i];

        numberIndexes[currNum] = i;
    }

    console.log(numberIndexes)
};
```
