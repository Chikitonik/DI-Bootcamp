const fs = require("fs");

const str = fs.readFileSync("RightLeft.txt", "utf-8");

let position = 0;
for (let i = 0; i < str.length; i++) {
  str[i] === ">" ? position++ : position--;
}
position < 0
  ? console.log(position + " steps to the left")
  : console.log(position + " steps to the right");

position = 0;
let targetPosition = -1;
for (let i = 0; i < str.length; i++) {
  str[i] === ">" ? position++ : position--;
  if (position === targetPosition) {
    console.log(i + 1 + " steps");
    break;
  }
}
