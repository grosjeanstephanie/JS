/* créer une variable*/
let city = "Lyoiege"; // une variable
const constante = 4; // une variable qu'on ne peut pas changer. on ne peut plus mettre constante = xxx après

let number = 23;// trois type de variable, les chiffres (sans guillemets, les strings (les mots), et les booleen (true/false))
let word = "";
let boolean = false;

/* montrer dans la console le résultat*/
console.log(" u live in " + city);

/* demander une question à l'utilisateur */
const readlineSync = require("readline-sync"); // tout en haut il faut mettre cette ligne
var y = readlineSync.question("second number"); // puis poser la question et attribuer la valeur de cette question
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?')); //

/* mathematique */
console.log(Math.floor (x)); // la valeur entière de x (si x=3.12 math.floor(x) === 3 )
console.log(Math.floor (x) % y); // le reste de x par la divistion y 
