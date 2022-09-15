let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n"); 

let horizontal = 0;
let depth = 0;

for (let i of array) {
  
  let tinyArray = i.split(' ');

  if(tinyArray[0] === "forward") {
    horizontal += Number(tinyArray[1]);
  } else if(tinyArray[0] === "down") {
    depth += Number(tinyArray[1]);
  } else if(tinyArray[0] === "up") {
    depth -= Number(tinyArray[1]);
  }
  
}

console.log(horizontal, depth);

console.log(horizontal * depth);