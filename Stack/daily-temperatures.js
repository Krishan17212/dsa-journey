// Given an array of daily temperatures, return an array where each element
// tells you how many days you have to wait until a warmer temperature.
// If no warmer day exists, put 0.
// Input:  [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1,  1,  4,  2,  1,  1,  0,  0]

// Why?
// Day 0 (73°): next warmer is Day 1 (74°) → wait 1 day
// Day 1 (74°): next warmer is Day 2 (75°) → wait 1 day
// Day 2 (75°): next warmer is Day 6 (76°) → wait 4 days
// Day 3 (71°): next warmer is Day 5 (72°) → wait 2 days
// Day 4 (69°): next warmer is Day 5 (72°) → wait 1 day
// Day 5 (72°): next warmer is Day 6 (76°) → wait 1 day
// Day 6 (76°): no warmer day → 0
// Day 7 (73°): no warmer day → 0

// Think about:

// Brute force: for each day, scan forward until warmer. O(n²).
// Can you avoid rescanning? What if you remembered days still waiting for a warmer day?
// When a new temperature arrives, which waiting days does it resolve?
// What order should waiting days be processed in?

function dailyTemperaturesBrute(temperatures) {
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
    // if inner loop completes without finding warmer → stays 0
  }

  return result;
}

// console.log(dailyTemperaturesBrute([73, 74, 75, 71, 69, 72, 76, 73]));

function dailyTemperaturesOptimized(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const waitingIndex = stack.pop();
      result[waitingIndex] = i - waitingIndex;
    }

    stack.push(i);
  }
  return result;
}

console.log(dailyTemperaturesOptimized([73, 74, 75, 71, 69, 72, 76, 73]));
