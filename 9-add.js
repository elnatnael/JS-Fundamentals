#!/usr/bin/env node
function add(a, b) {
    return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

const result = add(num1, num2);
console.log(result);

if (isNaN(num1) || isNaN(num2)) {
    process.exit(1);
}
