// Add many events listeners to one element on your webpage. Use the
// click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x,
// change position y, change color, change the font size… and more.
var button = document.getElementById("button");
button.addEventListener("click", () => {
  button.style.backgroundColor === "red"
    ? (button.style.backgroundColor = "green")
    : (button.style.backgroundColor = "red");
});
button.addEventListener("dblclick", () => {
  button.style.width === "100px"
    ? (button.style.width = "200px")
    : (button.style.width = "100px");
});
button.addEventListener("mouseover", () => {
  button.style.border = "1px solid red";
});
button.addEventListener("mouseout", () => {
  button.style.border = "1px solid black";
});
