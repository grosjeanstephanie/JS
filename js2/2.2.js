const readlineSync = require("readline-sync");
let min = readlineSync.question("What is your min?");
let max = readlineSync.question("What is your max?");
let current = readlineSync.question("What is your current?");
  if ((current < max) || (current > min)) {
    console.log(current + " You are right!");
  }
else if (min > max) {
  console.log("You are error! GET OUT!!!!!!");
}
