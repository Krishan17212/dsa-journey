// You have an array where each element is a stock price on that day.
// You can buy on one day and sell on a later day.
// Return the maximum profit you can make.
// If no profit is possible, return 0.

/* Input:  [7, 1, 5, 3, 6, 4]
Output: 5
Why?   Buy at 1 (day 2), sell at 6 (day 5) → profit = 5

Input:  [7, 6, 4, 3, 1]
Output: 0
Why?   Prices only go down. No profitable trade exists. */

/**
 * BRUTE FORCE — Best Time to Buy and Sell Stock
 * Try every pair where buy index < sell index
 * Time: O(n²) | Space: O(1)
 */
function maxProfitBrute(prices) {
  // O(n^2)
  let maxProfit = 0;

  for (let buy = 0; buy < prices.length; buy++) {
    for (let sell = buy + 1; sell < prices.length; sell++) {
      const profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

// Optimise method

function maxProfitOptimise(prices) {
  // O(n)
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const today = prices[i];

    if (today < minPrice) {
      minPrice = today;
    } else {
      const profit = today - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
