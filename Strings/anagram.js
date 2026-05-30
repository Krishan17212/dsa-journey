// Given two strings, return true if one is an anagram of the other.
// An anagram uses the exact same characters in any order.
// Input:  s = "anagram",  t = "nagaram"
// Output: true

// Input:  s = "rat",  t = "car"
// Output: false

// Input:  s = "a",  t = "a"
// Output: true

// Brute Forece method
function isAnagramSort(s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagramSort("anagram", "nagaram"));
console.log(isAnagramSort("rat", "car"));
