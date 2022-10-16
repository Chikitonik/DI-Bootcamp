// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// Add a “light blue” background color and some padding to the <div>.
let div = document.querySelector("div");
div.style.backgroundColor = "rgb(173, 216, 230)";
div.style.padding = "10px";
// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
let liArr = document.querySelectorAll("li");
liArr.forEach((e) => {
  if (e.textContent === "John") e.style.display = "none";
  if (e.textContent === "Pete") e.style.border = "1px solid black";
});
// Change the font size of the whole body.
document.querySelector("body").style.fontSize = "24px";
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor === "rgb(173, 216, 230)") {
  alert(`Hello ${liArr[0].textContent} and ${liArr[1].textContent}`);
}
