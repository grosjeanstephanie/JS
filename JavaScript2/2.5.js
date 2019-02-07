const readlineSync = require("readline-sync");
let x = parseInt(readlineSync.question("What is your favorite number?"));
while (x !== 42) {
  x = parseInt(readlineSync.question("Are you sure?"));
}
console.log("You are right!");
//Tant que ma réponse n'est pas 42, l'utilisateur va me demander si je suis sûre de
//ma réponse et dès que je mettrais 42, l'utilisateur arrêtera de me poser la question.
//let = "42";
//let = 42;