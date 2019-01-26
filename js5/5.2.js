const readlineSync = require("readline-sync");
let myObject = {
  name : "",
  production : "",
  casting: [],
}

function askTvSerie(){
   myObject.name = readlineSync.question("What is the name of you favourite tv serie?");
   myObject.production = readlineSync.question("What is the year of production?");
      while(a = readlineSync.question("What is the casting ?")){
    myObject.casting.push(a);
  }
  return myObject;
}
var myJSONText = JSON.stringify( myObject); // transformer mon objet en strings
var fs = require( 'fs'); // recherche dans le dossier
fs.writeFileSync("./newjason.JSON", myJSONText, "utf8");
function randomizeCast(tvSerie){
  let serie = askTvSerie();
  let randomarray = [];
  for (let i=0; i<serie.casting.length; i++){
    index = Math.floor(Math.random()* serie.casting.length);
    randomarray.push(serie.casting[index]);
  }
  return randomarray;
}
console.log(randomizeCast(myObject));
