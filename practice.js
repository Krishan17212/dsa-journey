// Two sum problem
// Input = [2,7,11,15]
// Output = 26

// Brute force method

function twoSumNaive(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// Time = O(n^2)
// Space = O(1)

// console.log(twoSumNaive([2, 7, 11, 15], 9));

function twoSumOptimised(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    }
    obj[n] = i;
  }
  return null;
}

// Time = O(n)
// Space = O(n)

// console.log(twoSumOptimised([2, 7, 11, 15], 26));

// Ques :- Sliding window maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right. You can ony see the k numbers
// in the window. Each time the sliding window moves right by one position.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

function slidingWindowNaive(nums, k) {
  let result = [];
  let n = nums.length;
  for (let i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
  return result;
}

// console.log(slidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

function maxSlidingWindowOptimized(nums, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    while (nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindowOptimized([1, 3, -1, -3, 5, 3, 6, 7], 3));
