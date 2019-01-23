const readlineSync = require("readline-sync");
var x = readlineSync.question("Choose a number");
var y = readlineSync.question("second number");
console.log(Math.floor (x) / y);
console.log(Math.floor (x) % y);
