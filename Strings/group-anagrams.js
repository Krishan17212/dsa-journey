// Given an array of strings, group all anagrams together.
// Return the groups in any order.
// Input:  ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input:  [""]
// Output: [[""]]

// Input:  ["a"]
// Output: [["a"]]

// Think about:

// Two strings are anagrams if they have identical character frequencies
// What single value could represent an entire group of anagrams?
// How does a HashMap help you group things that share a common property?

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  return a.split("").sort().join("") === b.split("").sort().join("");
}

// Brute force
function groupAnagramsBrute(strs) {
  // O(n² × k log k)
  const visited = new Array(strs.length).fill(false);
  const result = [];

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;

    const group = [strs[i]];
    visited[i] = true;

    for (let j = i + 1; j < strs.length; j++) {
      if (!visited[j] && isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        visited[j] = true;
      }
    }

    result.push(group);
  }

  return result;
}

console.log(groupAnagramsBrute(["eat", "tea", "tan", "ate", "nat", "bat"]));
