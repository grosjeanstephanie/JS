const readlineSync = require("readline-sync");
let i = 1;

while (i <= 100) {
  console.log(i);
  if(i % 2 == 0){
    console.log(1 % 2);
  }
  else {
    console.log(i * 3);
  }
  i += 1;
}
