const readlineSync = require("readline-sync");
var shoes = readlineSync.question("Ask for the shoes-size?");
var birthYear = readlineSync.question("Ask for the birth year?");
console.log(((((shoes * 2) + 5) * 50) - 1993) + 1766);
