// Ques :- Sliding window maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right. You can ony see the k numbers
// in the window. Each time the sliding window moves right by one position.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

const slidingWindowMaxNaive = (nums, k) => {
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
};

console.log(slidingWindowMaxNaive([1, 3, -1, -3, 5, 3, 6, 7], 3))