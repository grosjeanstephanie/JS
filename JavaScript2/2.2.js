const readlineSync = require("readline-sync");
let min = readlineSync.question("What is your min?");
let max = readlineSync.question("What is your max?");
let current = readlineSync.question("What is your current?");
  if ((current < max) && (current > min)){
    console.log(current + " You are right!");
  }
  else if (min > max){
    console.log("YOU ARE ERROR!!!! GET OUT!!!");
  }
//On me demande d'entrer 3 valeurs qui sont "min", "max" et "current".
//On me demande que current soit entre le min et le max.
//Si mon current est entre le min et le max l'utilisateur me dira que j'ai raison.
//Et après on me demande de faire en sorte que le min soit plus grand le que le max
// Et si c'est le cas alors l'utilisateur me dira que je suis en erreur et que je dois sortir de là!
// puis poser la question et attribuer la valeur de cette question