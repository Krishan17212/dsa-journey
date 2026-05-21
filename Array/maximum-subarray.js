/* Given an array of integers (can include negatives),
find the contiguous subarray with the largest sum.
Return that sum.

IInput:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Why?   Subarray [4, -1, 2, 1] has the largest sum = 6

Input:  [1]
Output: 1

Input:  [-3, -1, -2]
Output: -1   ← all negative, best is the least negative
*/

function maxSubarrayBrute(nums) { // O(n^2)
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

// console.log(maxSubarrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
