const readlineSync = require("readline-sync");
let a = 0;
while (a <=100) {
  console.log(a);
    if (a % 2 === 0){
      console.log(a / 2);
    } else {
      console.log(a * 3);
    }
  a += 1;
}
// Avec la liste avec tous les numéros entre 1 et 100 que tous les numéros paires
//sont divisible par 2 et que les numéros impaires multipliés par 3.
/*
0 / 2 = 0; ->le reste = 0
1 / 2 = 0.5 -> le reste = 0.5
2 / 2 = 1 -> le reste = 0
3 / 3 = 1.5 -> le reste = 0.5 */