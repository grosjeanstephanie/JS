const readlineSync = require("readline-sync");
function rand10(){
  return  Math.floor((Math.random() * Math.floor(10))+1);
}
function multiRand(n){
  let arr = [];
  for (let i=0; i<n; i++){
    arr.push(rand10());
  }
  return arr
};
var nbr = readlineSync.question("Enter a number: ");
console.log(multiRand(nbr));
