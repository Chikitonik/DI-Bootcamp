function dragDrop(e) {
  e.preventDefault();
  //   var data = e.dataTransfer.getData("text");
  var target = document.getElementById("box");
  e.target.appendChild(target);
}
function allowDrop(e) {
  e.preventDefault();
}
function allowEnter(e) {
  e.preventDefault();
}
function dragStart(e) {
  //   e.preventDefault();
  //   e.dataTransfer.setData("text", e.target.id);
}
