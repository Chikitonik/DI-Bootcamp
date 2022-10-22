var alphabet = "abcdefghijklmnopqrstuvwxyz";
var box;
for (let index = 0; index < alphabet.length; index++) {
  box = document.createElement("div");
  box.classList.add("box");
  box.textContent = alphabet[index].toUpperCase();
  box.setAttribute("draggable", true);
  box.addEventListener("dragstart", (e) => {});
  box.addEventListener("dragend", dragEnd);
  document.body.appendChild(box);
}

function dragEnd(e) {
  //   e.preventDefault();
  var _x = e.clientX;
  var _y = e.clientY;
  e.target.style.left = _x + "px";
  e.target.style.top = _y + "px";
  e.target.style.position = "absolute";
}
