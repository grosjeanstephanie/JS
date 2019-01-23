const readlineSync = require("readline-sync");
function factorial(a){
  if (a == 0 || a == 1){
    return 1;
  }
  else {
    return factorial (a - 1) * a;
  }
}
var nbr = readlineSync.question("Enter a number: ");
console.log(factorial(nbr));
