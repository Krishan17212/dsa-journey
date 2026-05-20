// You have an array of numbers.
// Return true if any number appears more than once.
// Return false if every number is unique.
// Example:
// Input: nums = [1, 2, 3, 1]
// Output: true
// Why? The number 1 appears twice

// Input: nums = [1, 2, 3, 4]
// Output: false
// Why? All numbers are unique

/**
 * BRUTE FORCE — Contains Duplicate
 * Compare every pair of elements
 * Time: O(n²) | Space: O(1)
 */


function containsDuplicateBrute(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

// console.log(containsDuplicateBrute([1, 2, 3, 1])); // true but slow O(n^2)

/**
 * HASH SET — Contains Duplicate
 * Check existence using a Set
 * Time: O(n) | Space: O(n)
 */

// optimise method 1
function containsDuplicateSet(nums) { // O(n)
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
}


// Optimise method 2
function containsDuplicate(nums) { // O(n)
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (seen.has(nums[i])) return true;

        seen.add(nums[i]);
    }

    return false;
}

// ES6 method
function containsDuplicateClever(nums) { // O(n)
    return new Set(nums).size !== nums.length;
}

console.log(containsDuplicateClever([1, 2, 3, 1])); // true
