/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import { allProjects } from "./project";
import { deleteTask } from "./toDo";
import projectSort from "./projectAssign";
import { currentProject } from "./displayProjects";

const clearToDoDisplay = () => {
  const holder = document.querySelector(".task-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const updateDelete = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteTask(event.target.parentNode.id);
      projectSort();
      displayTasks(currentProject);
    });
  });
};

const displayTasks = (project) => {
  projectSort();
  clearToDoDisplay();
  const holder = document.querySelector(".task-holder");
  const display = allProjects[project];
  for (let i = 0; i < display.projectToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");
    eachToDoHolder.id = i;

    holder.appendChild(eachToDoHolder);

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${display.projectToDo[i].title}</p></div>
      <div class='description'><p>Description ${display.projectToDo[i].description}</p></div>
      <div class="due"><p>Due Date: ${display.projectToDo[i].dueDate}</p></div>
      <div class="priority"><p>Time Allocations: ${display.projectToDo[i].priority}</p></div>
      <div class="notes"><p>Notes: ${display.projectToDo[i].notes}</p></div>
      <div class="done"><p>Complete ${display.projectToDo[i].checkStat}</p></div>
      <div class="project"><p>project: ${display.projectToDo[i].project}</p></div>
      <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
  }
  updateDelete();
};

export default displayTasks;
