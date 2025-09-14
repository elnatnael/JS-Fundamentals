#!/usr/bin/node

const args = process.argv.slice(2);
let count = 0;

for (const arg of args) {
    count++;
}

if (count === 0) {
    console.log("No argument");
} else if (count === 1) {
    console.log(args[0]);
} else {
    for (let i = 0; i < count; i++) {
        console.log(`  Argument ${i + 1}: ${args[i]}`);
    }
}