const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: node script.js <number>");
    process.exit(1);
}

const inputNumber = parseInt(args[0]);

if (isNaN(inputNumber)) {
    console.log("Not a number");
    process.exit(1);
}

//console.log("Original string:", args[0]);
console.log("My number: ", inputNumber);

