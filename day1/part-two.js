let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n"); // turns lines in the txt file into an array

let total = 0;
for (let i = 0; i < array.length; i++) {
  if(array[i + 2] && array[i + 3] - array[i] > 0) {
    total++;
  }
}

console.log(total);