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

// console.log(findMinBinarySearch([3, 4, 5, 1, 2]));


// Same rotated sorted array. But now instead of finding the minimum,
// find a specific target value. Return its index, or -1 if not found.

// Input:  nums = [4, 5, 6, 7, 0, 1, 2],  target = 0
// Output: 4

// Input:  nums = [4, 5, 6, 7, 0, 1, 2],  target = 3
// Output: -1

// Input:  nums = [1],  target = 0
// Output: -1


function searchBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}

console.log("linear ", searchBrute([4, 5, 6, 7, 0, 1, 2], 0));