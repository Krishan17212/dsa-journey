// Beginner thinking: 1 se n tak sab check karo
function getFactorsBrute(n) {
    const factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

// Approach 2 Optimized O(√n)
function getFactorsOptimized(n) {
    const small = [];
    const large = [];

    for (let i = 1; i * i <= n; i++) {

        if (n % i === 0) {
            small.push(i);

            if (i !== n / i) {
                large.push(n / i);
            }
        }
    }
    return [...small, ...large.reverse()];
}