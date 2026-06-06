// Given two strings s and t, return the minimum window substring of s
// such that every character in t (including duplicates) is included.
// If no such window exists, return "".
// Input:  s = "ADOBECODEBANC",  t = "ABC"
// Output: "BANC"

// Input:  s = "a",  t = "a"
// Output: "a"

// Input:  s = "a",  t = "aa"
// Output: ""   ← only one 'a' in s, need two

function containsAll(window, tFreq) {
  const wFreq = new Map();
  for (const char of window) {
    wFreq.set(char, (wFreq.get(char) || 0) + 1);
  }
  for (const [char, count] of tFreq) {
    if ((wFreq.get(char) || 0) < count) return false;
  }
  return true;
}

function minWindowBrute(s, t) {
  // O(n² × m)
  if (!t.length || !s.length) return "";

  // Build target frequency map
  const tFreq = new Map();
  for (const char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1);
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const window = s.slice(i, j);

      // Check if window contains all chars of t
      if (containsAll(window, tFreq)) {
        if (!result || window.length < result.length) {
          result = window;
        }
      }
    }
  }

  return result;
}

// console.log(minWindowBrute("ADOBECODEBANC", "ABC"));

function minWindow(s, t) {
  if (!s.length || !t.length) return "";
  const tFreq = new Map();
  for (const char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1);
  }

  const required = tFreq.size;
  let formed = 0;

  const windowFreq = new Map();
  let minLen = Infinity;
  let resultLeft = 0;
  let resultRight = 0;

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

    if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
      formed++;
    }

    while (formed === required && left <= right) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        resultLeft = left;
        resultRight = right;
      }

      const leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);

      if (
        tFreq.has(leftChar) &&
        windowFreq.get(leftChar) < tFreq.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(resultLeft, resultRight + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
