let first = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i<first.length; i++){
  sum+= first[i];
}
sum /= first.length;
console.log(sum);


let second = [100, 101, 102];
let sum1 = 0;
for (let i = 0; i<second.length; i++){
  sum1 += second[i];
}
sum1 /= second.length; // on fait la division par la longueur du tableau
console.log(sum1);
