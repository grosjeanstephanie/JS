const readlineSync = require("readline-sync");
let n =readlineSync.question("What is your number?");
let sum = 0;
let x = 0;
while(sum < 5){
  sum++;
  x+=sum;
}
console.log(sum);
