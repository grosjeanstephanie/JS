const readlineSync = require("readline-sync");
let n =readlineSync.question("What is your number?");
let sum = 0;
let x = 0;
while(sum < 5){
  sum++;
  x+=sum;
}
console.log(sum);



let n = readlineSync.question("how many number do you want to add?"); s

let a = 0;
let sum = 0;
while(a < n) {
  let newNumber = readlineSync.question("what is your number?"); 
  sum = newNumber + sum;
}


let newNumber1 = readlineSync.question("what is your number?"); 
let newNumber2 = readlineSync.question("what is your number?"); 
let newNumber3 = readlineSync.question("what is your number?"); 
let newNumber4 = readlineSync.question("what is your number?"); 
let sum = newNumber1 + newNumber2 + newNumber3 + newNumber4 //4+2+2+1

let sum = 0;
let newNumber1 = readlineSync.question("what is your number?"); //4
sum = sum +newNumber1;//0+4=4
let newNumber2 = readlineSync.question("what is your number?"); //2
sum = sum +newNumber2; //4+2=6
let newNumber3 = readlineSync.question("what is your number?"); //2
sum = sum +newNumber3; //6+2=8
let newNumber4 = readlineSync.question("what is your number?"); //1
let sum = sum + newNumber4; //8+1=9