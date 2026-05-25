// Given an integer array, find the contiguous subarray with the largest product.
// Return that product.

// Input:  [2, 3, -2, 4]
// Output: 6
// Why?   Subarray [2, 3] has product 6

// Input:  [-2, 0, -1]
// Output: 0

// Input:  [-2, 3, -4]
// Output: 24
// Why?   [-2, 3, -4] → (-2)×3×(-4) = 24


function maxProductBrute(nums) {
    let maxProduct = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}