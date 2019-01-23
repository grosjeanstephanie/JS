const readlineSync = require("readline-sync");
let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" ,"Friday" ,
  "Saturday" , "Sunday"];
let number = 0;

do{
  number = readlineSync.question("Choose a number between 1 and 7?");
}
while (number > 7 || number < 1);
console.log(days[number-1]);

/*
let number = readlineSync.question("blablaba");
switch(number-1){
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  default:
    number = readlineSync.question("blablaba");
    break;
}
*/
