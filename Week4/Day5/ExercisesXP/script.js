var userNumber;
var computerNumber;
function playTheGame() {
  if (confirm("Would You like to play a game? \uD83C\uDFB2")) {
    computerNumber = Math.round(Math.random() * 9) + 1;
    compareNumbers(userNumberAsk(), computerNumber);
  } else {
    alert("No problem, Goodbye \uD83D\uDC4B");
  }
}
function userNumberAsk() {
  do {
    askedNumber = prompt("Enter a number from 0 to 10 \uD83C\uDFB2");
    while (askedNumber === null) {
      alert(
        "\uD83D\uDEAB You haven't entered anything, please input a number from 0 to 10"
      );
      askedNumber = prompt("Enter a number from 0 to 10 \uD83C\uDFB2");
    }
    askedNumber = Number(askedNumber);
    if (askedNumber != askedNumber) {
      alert(
        "\uD83D\uDEAB Sorry Not a number, please input a number from 0 to 10"
      );
    } else if (askedNumber > 10 || askedNumber < 0) {
      alert(
        "\uD83D\uDEAB Sorry it's not a good number, please input a number from 0 to 10"
      );
    }
  } while (askedNumber != askedNumber || askedNumber > 10 || askedNumber < 0);
  return askedNumber;
}
function compareNumbers(userNumber, computerNumber) {
  var counts = 0;
  while (counts < 3) {
    if (userNumber === computerNumber) {
      alert("WINNER \uD83C\uDFC6\uD83C\uDFC6\uD83C\uDFC6");
      break;
    }
    if (counts < 2) {
      if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer's, guess again");
      } else {
        alert("Your number is smaller then the computer's, guess again");
      }
    }
    counts++;
    if (counts == 3) {
      alert("Out of chances \uD83D\uDE14");
    } else {
      userNumber = userNumberAsk();
    }
  }
}
