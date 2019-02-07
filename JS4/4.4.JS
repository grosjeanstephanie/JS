const readlineSync = require("readline-sync");
let number = readlineSync.question("Between the number?");
let tab = [];

let avg = (tab) => {
  let sum = 0;
    for(let i = 0; i < tab.length; i++){
      sum += tab[i];
  }
  return sum / tab.length;
}

let min = (tab) => {
  return Math.min(...tab);
}
let max = (tab) => {
  return Math.max(...tab);
}
let rand10 = (n) => {
  return Math.floor(Math.random() * 10 +1);
}
let multiRand = (n) => {
  var tab = [];
  for( let i = 0; i < n; i++){
    tab.push(rand10());
  }
  return tab;
}
console.log(avg(tab));
console.log(min(tab));
console.log(max(tab));
