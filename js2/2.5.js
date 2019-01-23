const readlineSync = require("readline-sync");
let x = parseInt(readlineSync.question("What is your favorite number?"));
while (x !== 42){
 x = parseInt(readlineSync.question("Are you sure?"));
}
console.log( "You are right!! ");
