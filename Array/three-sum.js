// Given an integer array, return all unique triplets that sum to zero.
// No duplicate triplets in the output.


// Input:  nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSumBrute(nums) {
    const result = [];
    const seen = new Set();
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const key = `${nums[i]},${nums[j]},${nums[k]}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }
    }

    return result;
}

// console.log(threeSumBrute([-1, 0, 1, 2, -1, -4])); //O(n^3) three nested loopsway to slow


/**
 * OPTIMAL — 3Sum using Sort + Two Pointers
 * Fix one element, use Two Pointers for the remaining pair
 * Time: O(n²) | Space: O(1) excluding output
 *
 * Key Insight: Sort first. Fix nums[i], then use two pointers
 * on the remaining subarray to find pairs summing to -nums[i].
 * Skip duplicates at both the outer loop and pointer levels.
 */
function threeSumOptimised(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        if (nums[i] > 0) break;

        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i];

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;

            } else if (sum < target) {
                left++;

            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSumOptimised([-1, 0, 1, 2, -1, -4])); 