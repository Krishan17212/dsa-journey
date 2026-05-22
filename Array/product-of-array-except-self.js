// Given an array nums, return an array output where
// output[i] = product of all elements except nums[i].
// You cannot use division. Must be O(n).

// Input:  [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Why?
// output[0] = 2×3×4 = 24  (everything except index 0)
// output[1] = 1×3×4 = 12  (everything except index 1)
// output[2] = 1×2×4 = 8   (everything except index 2)
// output[3] = 1×2×3 = 6   (everything except index 3)


// The constraint "no division" is the key.
// Without it, you'd just compute total product then divide each element out.
// So what else can you do?
// Hint: For output[i], you need everything to the left of i multiplied by everything to the right of i.


/**
 * BRUTE FORCE — Product of Array Except Self
 * For each element, multiply all others
 * Time: O(n²) | Space: O(1) excluding output array
 */
function productExceptSelfBrute(nums) { // O(n^2)
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }

        output.push(product);
    }

    return output;
}

// console.log(productExceptSelfBrute([1, 2, 3, 4]));



/**
 * APPROACH 1 — Prefix and Suffix Arrays
 * Build left products and right products separately
 * Time: O(n) | Space: O(n)
 */
function approachOne(nums) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const output = new Array(n);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * suffix[i];
    }

    return output;
}

// console.log(approachOne([1, 2, 3, 4]));