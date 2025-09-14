#!/usr/bin/node

function factorial(n) {
    // Base case: factorial of NaN or 0 is 1
    if (isNaN(n) || n === 0) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Get the argument and convert to integer
const num = parseInt(process.argv[2]);

// Compute and print the factorial
const result = factorial(num);
console.log(result);