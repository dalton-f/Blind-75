# Intuition

A string s is an anagram of string t if both strings are equal after being sorted.

A string s is also an anagram of string t if both strings have the same characters and count of each respective character.

# Approach

The naive solution would be sort both strings using a built-in function .sort() and then check if they are equal. This would have a time complexity of O(n log n).

A more efficent solution is to use a hashmap to track the count of each character between the strings. This could be done using two maps, and comparing to check if they are equal. A more elegant solution is to use a singular map and add to the count of char x for the length of one string, and reduce the count for the other string.

If the strings have the same amount of a particular character, the count will equal zero after both loops. This will be true for each characters. Then you can check for any non-zero number within the map and return false - the strings are not anagrams.

Otherwise, the strings are anagrams.

# Complexity

- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code

```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    const letterMap = new Map();

    for (const char of s) {
        const count = (letterMap.get(char) || 0) + 1
        letterMap.set(char, count);
    }

    for (const char of t) {
        const count = (letterMap.get(char) || 0) - 1
        letterMap.set(char, count);
    }

    for (const [char, count] of letterMap) {
        if (count !== 0) return false;
    }

    return true;
};
```
