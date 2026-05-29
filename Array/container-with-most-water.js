// You have an array where each element is the height of a vertical line.
// Find two lines that together with the x-axis form a container that holds the most water.
// Return the maximum amount of water.

// Input:  [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

// Input:  [1, 1]
// Output: 1

// How Water Volume Works:
// Water between line i and line j:
//   width   = j - i          (distance between lines)
//   height  = min(h[i], h[j]) (limited by the SHORTER line)
//   volume  = width × height


function maxAreaBrute(height) {
    let maxWater = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const width = j - i;
            const h = Math.min(height[i], height[j]);
            const volume = width * h;
            maxWater = Math.max(maxWater, volume);
        }
    }

    return maxWater;
}

console.log("Max area using brute force: ", maxAreaBrute([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Max area using brute force: ", maxAreaBrute([1, 1]));

// Time O(n^2) | space O(1)



function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const volume = width * h;
        maxWater = Math.max(maxWater, volume);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}


console.log("Max area using two pointers: ", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Max area using two pointers: ", maxArea([1, 1]));

// Time O(n) | space O(1)