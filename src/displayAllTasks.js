/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import format from "date-fns/format";
import { parseISO } from "date-fns";
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

const updateDeletes = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteTask(event.target.parentNode.id);
      sortAndDisplayTasks(currentProject);
    });
  });
};

const displayTasks = (projectOrDate) => {
  const holder = document.querySelector(".task-holder");
  const display = allProjects[projectOrDate];
  for (let i = 0; i < display.projectToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");
    eachToDoHolder.id = i;

    holder.appendChild(eachToDoHolder);

    const date = format(parseISO(display.projectToDo[i].dueDate), "MM/dd/yyyy");

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${display.projectToDo[i].title}</p></div>
      <div class='description'><p>Description ${display.projectToDo[i].description}</p></div>
      <div class="due"><p>Due Date: ${date}</p></div>
      <div class="priority"><p>Time Allocations: ${display.projectToDo[i].priority}</p></div>
      <div class="notes"><p>Notes: ${display.projectToDo[i].notes}</p></div>
      <div class="done"><p>Complete ${display.projectToDo[i].checkStat}</p></div>
      <div class="project"><p>project: ${display.projectToDo[i].project}</p></div>
      <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
  }
};

const sortAndDisplayTasks = (project) => {
  projectSort();
  clearToDoDisplay();
  displayTasks(project);
  updateDeletes();
};

export { sortAndDisplayTasks };
