function dragEnd(e) {
  var _x = e.clientX;
  var _y = e.clientY;
  e.target.style.left = _x + "px";
  e.target.style.top = _y + "px";
  e.target.style.position = "absolute";
  e.target.style.fontSize = _y / 5 + "px";
  console.log(_y);
}
