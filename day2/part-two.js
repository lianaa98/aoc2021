let fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n"); 

let horizontal = 0;
let depth = 0;
let aim = 0;

for (let i of array) {
  
  let tinyArray = i.split(' ');

  if(tinyArray[0] === "forward") {
    horizontal += Number(tinyArray[1]);
    depth += aim * Number(tinyArray[1]);
  } else if(tinyArray[0] === "down") {
    aim += Number(tinyArray[1]);
  } else if(tinyArray[0] === "up") {
    aim -= Number(tinyArray[1]);
  }
  
}

console.log(horizontal, depth, aim);

console.log(horizontal * depth);