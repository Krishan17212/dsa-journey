// Two Sum
// Given an array of integers nums and an integer target,
// Return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums, target) {
  // O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// console.log(twoSum([2, 7, 11, 15], 9));

function twoSumOptimized(nums, target) {
  // O(n)
  const obj = new Map();

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    }
    obj[n] = i;
  }

  return null;
}

console.log(twoSumOptimized([2, 7, 11, 15], 9));
