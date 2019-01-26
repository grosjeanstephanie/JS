const readlineSync = require("readline-sync");
let firstname = readlineSync.question("What is your first name?");
let name = readlineSync.question("What is your name?");
let city = readlineSync.question("Where do you live?");
console.log("Hello "  + firstname + " " + name + " and you live in " + city);
