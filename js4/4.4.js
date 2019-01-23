const readlineSync = require("readline-sync");
function average(arr){
  let sum = 0
  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
function min(arr) {
  return Math.min(...arr);
}
function max(arr) {
  return Math.max(...arr);
}
function rand10(){
  return  Math.floor( Math.random() * Math.floor(10)+1);
}
function multiRand(n){
  let arr = [];
  for (let i=0; i<n; i++){
    arr.push(rand10());
  }
  return arr
}
var numb = readlineSync.question("Enter a number: ")
var tab = multiRand(numb);
console.log(min(tab));
console.log(max(tab));
console.log(average(tab));
console.log(tab);
