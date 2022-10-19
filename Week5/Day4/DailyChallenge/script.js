// Follow these steps :
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently
// displayed (but keep the values entered by the user). The user could click the button at least three times and
// get a new story. Display the stories randomly.

function get(id) {
  return document.getElementById(id);
}
var words = [
    (noun = get("noun")),
    (adjective = get("adjective")),
    (person = get("person")),
    (verb = get("verb")),
    (place = get("place")),
  ],
  button = get("lib-button"),
  shuffleBut = get("shuffle"),
  shuffledArray = [1, 2, 3].sort((a, b) => 0.5 - Math.random());

button.addEventListener("click", lib);
shuffleBut.addEventListener("click", shuffle);

function lib(event) {
  isContinue = true;
  words.forEach((e) => {
    if (!e.value) {
      alert(`Value of ${e.id} is empty`);
      isContinue = false;
    }
  });
  if (isContinue)
    alert(
      `A friend of ${words[2].value} ${words[3].value} and after he take his ${words[0].value} and run off with his ${words[1].value} wife to the ${words[4].value}`
    );
  shuffledArray = [1, 2, 3].sort((a, b) => 0.5 - Math.random());
  event.preventDefault();
}

function shuffle(event) {
  event.preventDefault();
  if (shuffledArray.length == 0) {
    alert("No more phrases!");
  }
  switch (shuffledArray[0]) {
    case 1:
      alert(
        `It was a ${words[1].value}, cold November day. I ${words[3].value} to see ${words[2].value} with his ${words[0].value}, but he was in ${words[4].value}`
      );
      shuffledArray.shift();
      break;
    case 2:
      alert(
        `${words[2].value} say you ${words[3].value} your ${words[1].value} ${words[0].value} is in ${words[4].value}`
      );
      shuffledArray.shift();
      break;
    case 3:
      alert(
        `I saw a ${words[1].value} ${words[0].value} jumping up and down in ${words[4].value}. ${words[2].value} catch it and ${words[3].value} it`
      );
      shuffledArray.shift();
      break;
  }
}
