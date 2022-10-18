// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

var h1 = document.querySelector("h1");
var article = document.querySelector("article");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var button = document.createElement("button");
var p2 = document.querySelectorAll("p")[1];
// Using a DOM property, retrieve the h1 and console.log it.
console.log(h1);
// Using DOM methods, remove the last paragraph in the <article> tag.
article.lastElementChild.remove();
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
h3.addEventListener("click", () => {
  h3.style.display = "none";
});
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
button.textContent = "Make all bold";
document.body.appendChild(button);
button.addEventListener("click", () => {
  article.style.fontWeight = "bold";
});
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener("mouseover", () => {
  h1.style.fontSize = `${Math.random() * 100}px`;
});
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
p2.addEventListener("mouseover", () => {
  var fadeEffect = setInterval(function () {
    if (!p2.style.opacity) {
      p2.style.opacity = 1;
    }
    if (p2.style.opacity > 0) {
      p2.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
});
