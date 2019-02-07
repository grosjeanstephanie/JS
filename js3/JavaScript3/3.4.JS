let arr = [1, 2, 3, 4 , 5];
let max = arr[1];
let min = arr[1];
for (let i = 0; i < arr.length; i++){
  if(max < arr[i]){
    (max = arr[i]);
  }
  if(min > arr[i]){
    (min = arr[i]);
  }
}
console.log(max);
console.log(min);
