// Daily Challenge: 99 Bottles Of Beer

var startBottlesCount = prompt("Input a start number of bottles");
var clr = ["color:green;", "color:black;"];
// input check
while (
  isNaN(startBottlesCount) ||
  !startBottlesCount ||
  startBottlesCount < 2
) {
  startBottlesCount = prompt(
    "You inputted not a number. Input a start positive number of bottles more than 1"
  );
}
startBottlesCount = +startBottlesCount;
// first bottle
console.log(
  `We start the song at %c${startBottlesCount} %cbottles`,
  clr[0],
  clr[1]
);
console.log(`Take %c${1} %cdown, pass it around`, clr[0], clr[1]);
startBottlesCount--;
if (startBottlesCount == 1) {
  console.log(`we have now %c${startBottlesCount} %cbottle`, clr[0], clr[1]);
} else {
  console.log(`we have now %c${startBottlesCount} %cbottles`, clr[0], clr[1]);
}
// other bottles
if (startBottlesCount > 1) {
  for (var i = 2; i <= startBottlesCount; i++) {
    console.log(`then, Take %c${i} %cdown, pass them around`, clr[0], clr[1]);
    if (startBottlesCount - i > 0) {
      console.log(
        `we have now %c${startBottlesCount - i} %cbottles`,
        clr[0],
        clr[1]
      );
    }
    startBottlesCount = startBottlesCount - i;
  }
}
// last action
if (startBottlesCount == 1) {
  console.log(
    `Take %c${startBottlesCount} %cdown, pass it around`,
    clr[0],
    clr[1]
  );
}
if (startBottlesCount > 1) {
  console.log(
    `then, Take %c${startBottlesCount} %cdown, pass them around`,
    clr[0],
    clr[1]
  );
}
console.log("No bottle of beer on the wall");
