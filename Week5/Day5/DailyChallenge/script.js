var listTasks = document.querySelector(".listTasks");
var text = document.getElementById("text");
var add = document.querySelector(".add");
var labelArray = [];
var counter = 1;
// var xmarks = document.getElementsByClassName('fa-xmark')
add.addEventListener("click", addTask);
function addTask() {
  if (!!text.value) {
    var div = document.createElement("div");
    div.type = "checkbox";
    div.classList.add("task");
    div.setAttribute("data-task-id", counter);
    counter++;
    div.setAttribute("done", "false");
    div.innerHTML = `<i class="fa-solid fa-xmark"></i><input type="checkbox" /><label>${text.value}</label>`;
    listTasks.appendChild(div);
    labelArray.push(div);
    text.value = "";
    for (var i = 0; i < labelArray.length; i++) {
      var xmark = labelArray[i].querySelector("i");
      xmark.addEventListener("click", removeTask);
    }
  }
}

function removeTask(e) {
  var task = e.currentTarget.parentElement;
  task.remove();
}
