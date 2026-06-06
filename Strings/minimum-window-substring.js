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

console.log(minWindowBrute("ADOBECODEBANC", "ABC"));
