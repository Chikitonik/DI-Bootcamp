var field = document.getElementById("field"),
  cell = document.getElementById("cell"),
  favcolor = document.getElementById("favcolor"),
  clear = document.getElementById("clear");
var cells = [],
  isMouseDown = false;

// add cells
for (i = 0; i < 8000; i++) {
  var cell = document.createElement("div");
  cell.classList.add("cell");
  field.appendChild(cell);
}
// cells coloring
document.body.addEventListener("mousedown", () => {
  isMouseDown = true;
  console.log(isMouseDown);
});
document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
  console.log(isMouseDown);
});

cells = document.getElementsByClassName("cell");
function colorCell(event) {
  if (isMouseDown) event.target.style.backgroundColor = favcolor.value;
}
for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", colorCell);
}
// clear
clear.addEventListener("click", () => {
  for (i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }
});
