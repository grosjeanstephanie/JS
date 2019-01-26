const readlineSync = require("readline-sync");
let a = 1;
while (a <=100) {
  console.log(a);
    if (a % 2 ==0){
    console.log(a % 2);
    }
      else{
        console.log(a * 3);
      }
  a += 1;
}
// Avec la liste avec tous les numéros entre 1 et 100 que tous les numéros paires
//sont divisible par 2 et que les numéros impaires multipliés par 3.
