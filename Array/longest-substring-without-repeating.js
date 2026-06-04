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

// console.log(lengthOfLongestSubstringBrute("abcabcbb"));

// Sliding window with HashSet

// Time: O(n)
// Space: O(min(n, m)) where m = size of charset

function lengthOfLongestSubstring(s) {
  const window = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    while (window.has(char)) {
      window.delete(s[left]);
      left++;
    }

    window.add(char);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));

// Sliding Window with HashMap Optimization
// Time: O(n)
// Space: O(min(n, m))

function lengthOfLongestSubstringOptimal(s) {
  const lastSeen = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringOptimal("abcabcbb"));
