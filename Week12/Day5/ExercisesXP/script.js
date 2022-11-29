const taskName = document.getElementById("taskName");
const description = document.getElementById("description");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const isDone = document.getElementById("isDone");
const allTasksTbody = document.getElementById("allTasksTbody");

const tasksArray = JSON.parse(localStorage.getItem("tasksArray") || "[]");
addTasksToHtml();
// add tasks from array to html
function addTasksToHtml() {
  tasksArraySort();
  allTasksTbody.innerHTML = "";
  tasksArray.forEach((task, i) => {
    const tr = document.createElement("tr");
    tr.id = i;
    tr.innerHTML = `
        <td class='taskName'>${task.taskName}</td>
        <td class="taskDescription hidden">${task.description}</td>
        <td class="startDate">${task.startDate}</td>
        <td class="endDate hidden">${task.endDate}</td>
        <td class='daysLeft'>${task.daysLeft}</td>
        <td class='isDone'><input type="checkbox" onclick="checkBoxClick(event)" ${
          task.isDone ? "checked" : ""
        }/></td>
        <td class='del' onclick="deleteTask(event)">X</td>
        `;
    tr.addEventListener("click", showTaskDetails);
    allTasksTbody.appendChild(tr);
    setColorToDone();
  });
}
// task create
function createTask(event) {
  event.preventDefault();
  const daysLeft = Math.ceil(
    (new Date(endDate.value).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
  const task = {
    taskName: taskName.value,
    description: description.value,
    startDate: startDate.value,
    endDate: endDate.value,
    daysLeft: daysLeft,
    // isDone: isDone.checked,
  };
  tasksArray.push(task);
  addTasksToHtml();
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
}
// is done click
function checkBoxClick(event) {
  event.stopPropagation();
  let i = event.currentTarget.parentElement.parentElement.id;
  tasksArray[i].isDone = event.currentTarget.checked;
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));

  setColorToDone();
}
// delete task
function deleteTask(event) {
  event.stopPropagation();
  if (confirm("Delete the task?")) {
    let i = event.currentTarget.parentElement.id;
    tasksArray.splice(i, 1);
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    addTasksToHtml();
  }
}
// sort tasks
function tasksArraySort() {
  tasksArray.sort((p1, p2) =>
    p1.startDate < p2.startDate ? -1 : p1.startDate > p2.startDate ? 1 : 0
  );
}
// color task
function setColorToDone() {
  const trs = document.getElementsByTagName("tr");
  for (let i = 1; i < trs.length; i++) {
    if (trs[i].querySelectorAll(".isDone")[0].querySelector("input").checked) {
      trs[i].style.backgroundColor = "#c4eeba";
    } else {
      if (trs[i].querySelectorAll(".daysLeft")[0].textContent < 0) {
        trs[i].style.backgroundColor = "#f39494";
      } else trs[i].style.backgroundColor = "white";
    }
  }
}
// modal
var myModalBootstrap;
const taskNameModal = document.getElementById("taskNameModal");
const descriptionModal = document.getElementById("descriptionModal");
const startDateModal = document.getElementById("startDateModal");
const endDateModal = document.getElementById("endDateModal");
var taskIndexInModal;
// show and edit task in modal
function showTaskDetails(event) {
  taskNameModal.value =
    event.currentTarget.querySelectorAll(".taskName")[0].textContent;
  descriptionModal.value =
    event.currentTarget.querySelectorAll(".taskDescription")[0].textContent;
  startDateModal.value =
    event.currentTarget.querySelectorAll(".startDate")[0].textContent;
  endDateModal.value =
    event.currentTarget.querySelectorAll(".endDate")[0].textContent;
  myModalBootstrap = new bootstrap.Modal(
    document.getElementById("myModal"),
    {}
  );
  taskIndexInModal = event.currentTarget.parentElement.id;
  myModalBootstrap.show();

  // on edit delete task and make a new one
}
// modal close
function modalClose(e) {
  e.preventDefault();
  myModalBootstrap.hide();
}
// modal edit task
function saveChanges(event) {
  // del
  tasksArray.splice(taskIndexInModal, 1);
  // new
  const daysLeft = Math.ceil(
    (new Date(endDateModal.value).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
  const task = {
    taskName: taskNameModal.value,
    description: descriptionModal.value,
    startDate: startDateModal.value,
    endDate: endDateModal.value,
    daysLeft: daysLeft,
  };
  tasksArray.push(task);
  addTasksToHtml();
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  myModalBootstrap.hide();
}
