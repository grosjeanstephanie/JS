const readlineSync = require("readline-sync");
let n = readlineSync.question("What is your number?");
var sum = 0;
var i = 0;
while (i < n){
  console.log("n= "+n);
  console.log("sum="+sum);
  console.log("i="+i);
  sum += parseInt(readlineSync.question("What is your number?"));
  i++;
}
console.log(sum);
