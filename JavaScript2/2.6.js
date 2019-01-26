const readlineSync = require("readline-sync");
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
"Sunday"];
let numb = 0;
do{
  numb =readlineSync.question("Choose a number between 1 and 7? ");
}
while(numb > 7 || numb < 1);

console.log(days[numb - 1]);
//Tous les jours de la semaines doivent être en accord avec la réponse que j'aurais donné
// à l'utilisateur.
