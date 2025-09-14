// Get arguments from command line instead of prompt
const args = process.argv.slice(2);

const myVar = args[0];
const myVar2 = args[1];
console.log(myVar + " is " + myVar2);