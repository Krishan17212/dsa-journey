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

// console.log(isAnagramSort("anagram", "nagaram"));
// console.log(isAnagramSort("rat", "car"));

function isAnagramOptimise(s, t) {
  if (s.length != t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!map[char]) return false;
    map[char] -= 1;
  }

  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
}

// console.log(isAnagramOptimise("anagram", "nagaram"));
// console.log(isAnagramOptimise("rat", "car"));

function validAnagramObj(s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(validAnagramObj("anagram", "nagaram"));
console.log(validAnagramObj("rat", "car"));
