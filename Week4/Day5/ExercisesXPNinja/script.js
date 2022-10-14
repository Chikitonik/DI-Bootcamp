// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.

// asking a word
var theWord = "";
var theWordRemain = [];
var guessedWord = [];
var guessCounts = 0;
var isRunGame = true;
do {
  theWord = prompt("Player 1: Input a word with a length at least 8 letters");
} while (
  theWord.length < 8 ||
  theWord.match(/[a-zA-Z]/g).length != theWord.length
);
theWordRemain = [...theWord];
guessedWord = [..."*".repeat(theWord.length)];
console.log(guessedWord.join(""));

do {
  // asking a letter
  do {
    letter = prompt("Player 2: Input a letter");
  } while (
    letter.match(/[a-zA-Z]/g) === null ||
    letter.match(/[a-zA-Z]/g).length != 1
  );
  guessCounts++;
  // finding and setting the letter
  for (var i = 0; i < theWord.length; i++) {
    if (theWordRemain[i] == letter) {
      guessedWord[i] = letter;
      theWordRemain[i] = "*";
      // if success guessCounts = 0
      guessCounts = 0;
    }
  }
  if (guessedWord.indexOf("*") === -1) {
    console.log(guessedWord.join(""));
    console.log("CONGRATS YOU WIN");
    isRunGame = false;
  } else console.log(guessedWord.join(""));
  if (guessCounts === 10) {
    isRunGame = false;
    console.log("YOU LOSE");
  }
} while (isRunGame);
