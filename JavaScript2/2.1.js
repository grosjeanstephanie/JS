const readlineSync = require("readline-sync");
let age = readlineSync.question("What is your age?");
  if (age >= 18){ // Ici, je dis que si on a 18 ans ou plus on est adulte.
    console.log("You are adult");//l'utilisateur me dira que je suis un adult
  }
  else{
    console.log("You are not yet an adult!!");
    // Mais si j'ai moins de 18 ans il me dira que je
    //ne suis pas un adult!
  }
