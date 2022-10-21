var sounds = {
  boom: "a",
  clap: "s",
  hiHat: "d",
  kick: "f",
  openHat: "g",
  ride: "h",
  snare: "j",
  tink: "k",
  tom: "l",
};
// add buttons
var buttons = document.getElementById("buttons");
for (const [key, value] of Object.entries(sounds)) {
  var button = document.createElement("div");
  button.classList.add("button");
  button.id = key;
  button.addEventListener("click", playSoundOnClick);

  var letter = document.createElement("div");
  letter.textContent = value.toUpperCase();

  var caption = document.createElement("div");
  caption.textContent = key.charAt(0).toUpperCase() + key.slice(1);

  button.appendChild(letter);
  button.appendChild(caption);
  buttons.appendChild(button);
}
// play sounds
function playSoundOnClick(e) {
  var audio = new Audio(`sounds\\${e.currentTarget.id}.wav`);
  audio.play();
}

document.body.addEventListener("keypress", playSoundOnKeyPress);
function playSoundOnKeyPress(e) {
  var pressedLetter = String.fromCharCode(e.keyCode);

  for (const [key, value] of Object.entries(sounds)) {
    if (pressedLetter === value) {
      var currElem = document.getElementById(key);
      currElem.classList.add("playing");
      setTimeout(() => {
        currElem.classList.remove("playing");
      }, 100);
      var audio = new Audio(`sounds\\${key}.wav`);
      audio.play();
    }
  }
}
