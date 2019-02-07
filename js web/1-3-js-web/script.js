
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let bouton1 = document.getElementById('Sent');
let bouton2 = document.getElementById('Reset');

bouton2.addEventListener('click', () =>{
  document.getElementById('Text').value = "";
  document.getElementById('Text1').value = "";
  document.getElementById('Text2').value = "";
  document.getElementById('Text3').value = "";
})

bouton1.addEventListener('click', () =>{
  let textValue = document.getElementById('Text').value;
  let textValue1 = document.getElementById('Text1').value;
  let textValue2 = document.getElementById('Text2').value;
  let textValue3 = document.getElementById('Text3').value;

  let result = document.getElementById('result');
  result.innerHTML = "Name: " + textValue +
    "\nSuper power: " + textValue1 +
    "\nMotivation: " + textValue2 +
    "\nPlan to conquer the world: " + textValue3;
})
