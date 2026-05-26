// A sorted array was rotated at some pivot point. Find the minimum element in O(log n) time.

// Input:  [3, 4, 5, 1, 2]
// Output: 1

// Input:  [4, 5, 6, 7, 0, 1, 2]
// Output: 0

// Input:  [11, 13, 15, 17]
// Output: 11   ← not rotated at all


function findMinLinear(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
    }

    return min;
}

// console.log(findMinLinear([3, 4, 5, 1, 2]));

function findMinBinarySearch(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

console.log(findMinBinarySearch([3, 4, 5, 1, 2]));