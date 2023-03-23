/* eslint-disable no-plusplus */
import { allProjects } from "./project";
import { deleteTask } from "./toDo";
import { currentProject } from "./displayProjects";
import projectSort from "./projectAssign";

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
      // Sorry for this error, hard to avoid.
      // eslint-disable-next-line no-use-before-define
      displayTasks(currentProject);
    });
  });
};

const displayTasks = (project) => {
  projectSort();
  clearToDoDisplay();
  const holder = document.querySelector(".task-holder");
  const displayProject = allProjects[project];
  console.log(displayProject);
  for (let i = 0; i < displayProject.projectToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");
    eachToDoHolder.id = i;

    holder.appendChild(eachToDoHolder);

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${displayProject.projectToDo[i].title}</p></div>
      <div class='description'><p>Description ${displayProject.projectToDo[i].description}</p></div>
      <div class="due"><p>Due Date: ${displayProject.projectToDo[i].dueDate}</p></div>
      <div class="priority"><p>Time Allocations: ${displayProject.projectToDo[i].priority}</p></div>
      <div class="notes"><p>Notes: ${displayProject.projectToDo[i].notes}</p></div>
      <div class="done"><p>Complete ${displayProject.projectToDo[i].checkStat}</p></div>
      <div class="project"><p>project: ${displayProject.projectToDo[i].project}</p></div>
      <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
  }
  updateDelete();
};

export default displayTasks;
