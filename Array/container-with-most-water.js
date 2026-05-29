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