// Q :- You have an array of numbers nums and an integer target.
// Find two numbers in the array that add up to the target.
// Return their index positions (not the numbers themselves).

// Input:  nums = [2, 7, 11, 15],  target = 9
// Output: [0, 1]
// Why? Because nums[0] + nums[1] = 2 + 7 = 9 ✅

// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists ✅

// Brute Force Solution (O(n^2))
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Optimized Solution (O(n))
function twoSumOptimized(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}

console.log(twoSumOptimized([2, 7, 11, 15], 9)); // Output: [0, 1]

// Why is Hash Map solution faster?
// The brute force method checks every single pair (O(n²)).
// The Hash Map method checks only once (O(n)) because it instantly looks up the complement.
