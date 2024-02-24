/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const letterMap = new Map();

  for (const char of s) {
    const count = (letterMap.get(char) || 0) + 1;
    letterMap.set(char, count);
  }

  for (const char of t) {
    const count = (letterMap.get(char) || 0) - 1;
    letterMap.set(char, count);
  }

  for (const [char, count] of letterMap) {
    if (count !== 0) return false;
  }

  return true;
};
