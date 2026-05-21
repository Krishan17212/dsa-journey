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

function maxSubarrayBrute(nums) {
    let maxSum = -Infinity; // O(n^2)

    for (let start = 0; start < nums.length; start++) {
        let currentSum = 0;

        for (let end = start; end < nums.length; end++) {
            currentSum += nums[end];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

console.log(maxSubarrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
