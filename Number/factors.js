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


// Approach 3 Count factors only O(√n)
// Returns only count of factors not list
function countFactors(n) {
    let count = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += 2;

            if (i === n / i) {
                count -= 1;
            }
        }
    }

    return count;
}

// Approach 4 Prime factors using Sieve (O(n log log n))
// For multiple queries on the same n, precompute sieve
function generateSieve(limit) {
    const spf = new Array(limit + 1).fill(0);

    for (let i = 2; i <= limit; i++) {
        if (spf[i] === 0) {         // i is prime
            spf[i] = i;
            for (let j = i * i; j <= limit; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }
    return spf;
}

// Prime factorize using precomputed sieve
function primeFactorizeSieve(n, spf) {
    const factors = {};

    while (n > 1) {
        const p = spf[n];
        factors[p] = (factors[p] || 0) + 1;
        n /= p;
    }

    return factors;
}


// Approach 5 Sum of factors using formula (O(√n))---------------
// Formula: If n = p1^a1 * p2^a2 * ...
// Sum = (p1^0 + ... + p1^a1) * (p2^0 + ... + p2^a2) * ...

function sumOfFactors(n) {
    let sum = 1;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            let p = i;
            let pPowerSum = 1;

            // Calculate sum of powers of prime i
            while (n % i === 0) {
                pPowerSum = pPowerSum * i + 1;
                n /= i;
                p *= i;
            }

            sum *= pPowerSum;
        }
    }

    // If n is still > 1, it's a prime factor itself
    if (n > 1) {
        sum *= (n + 1);
    }

    return sum;
}