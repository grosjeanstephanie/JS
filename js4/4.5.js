function calcDistance(x1, y1, x2, y2){
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
}
var x1 = 2;
var x2 = 3;
var y1 = 5;
var y2 = 8;
console.log(calcDistance(x1, y1, x2, y2));
