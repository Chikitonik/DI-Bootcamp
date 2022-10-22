var loaderText1 = document.getElementById("loaderText1");
var letters = document.getElementsByClassName("letter");
var intervalId = setInterval(() => {
  var dotsCount = loaderText1.textContent.length;
  if (dotsCount < 10) {
    loaderText1.textContent += ".";
  } else {
    loaderText1.textContent = "Loading";
  }
  letter = letters[Math.round(Math.random() * (letters.length - 1))];
  if (letter.classList.contains("appearing")) {
    letter.classList.remove("appearing");
  } else {
    letter.classList.add("appearing");
  }
}, 500);
