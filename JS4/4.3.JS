const readlineSync = require("readline-sync");
let number = readlineSync.question("Between the number?");
function rand10(){
  return Math.floor(Math.random() * 10 +1);
}
function multiRand(n){
  let tab = [];
  for( let i = 0; i < n; i++){
    tab.push(rand10());
  }
  return tab;
}
console.log(multiRand(number));
