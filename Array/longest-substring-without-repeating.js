// Given a string, find the length of the longest substring without repeating characters.
// Input:  "abcabcbb"
// Output: 3    →  "abc"

// Input:  "bbbbb"
// Output: 1    →  "b"

// Input:  "pwwkew"
// Output: 3    →  "wke"

// Input:  ""
// Output: 0

function lengthOfLongestSubstringBrute(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.slice(i, j);
      const unique = new Set(sub);
      if (unique.size === sub.length) {
        maxLen = Math.max(maxLen, sub.length);
      }
    }
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringBrute("abcabcbb"));
