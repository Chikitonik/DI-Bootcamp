var box;
var colors = ["red", "blue", "green", "yellow", "orange", "purple", "grey"];

function onMouseMove(e) {
  box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
  let _x = e.clientX;
  let _y = e.clientY;
  box.style.left = _x + "px";
  box.style.top = _y + "px";
  box.style.borderColor =
    colors[Math.floor(Math.random() * (colors.length - 1))];
  setTimeout(removeBox, 900, box);
}

function removeBox(box) {
  document.body.removeChild(box);
}
