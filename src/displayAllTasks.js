/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import format from "date-fns/format";
import { getWeek, parseISO } from "date-fns";
import { allProjects } from "./project";
import { deleteTask, allToDo } from "./toDo";
import projectSort from "./projectAssign";
import { addTasksToStorage } from "./storage";
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
      deleteTask(event.target.id);
      addTasksToStorage();
      sortAndDisplayTasks(currentProject);
    });
  });
};

const loopThroughTasks = (index) => {
  const holder = document.querySelector(".task-holder");
  const display = allProjects[index];
  for (let i = 0; i < display.projectToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");
    eachToDoHolder.id = i;

    holder.appendChild(eachToDoHolder);
    const indexOfTask = allToDo.indexOf(display.projectToDo[i]);

    const date = format(parseISO(display.projectToDo[i].dueDate), "MM/dd/yyyy");

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${display.projectToDo[i].title}</p></div>
      <div class='description'><p>Description ${display.projectToDo[i].description}</p></div>
      <div class="due"><p>Due Date: ${date}</p></div>
      <div class="priority"><p>Time Allocations: ${display.projectToDo[i].priority}</p></div>
      <div class="notes"><p>Notes: ${display.projectToDo[i].notes}</p></div>
      <div class="done"><p>Complete ${display.projectToDo[i].checkStat}</p></div>
      <div class="project"><p>project: ${display.projectToDo[i].project}</p></div>
      <div class="delete"><button class=delete-btn id=${indexOfTask}>X</button></div>`;
  }
};

const checkDatesOfTasks = () => {
  const getToday = new Date();
  const formatted = format(getToday, "MM/dd/yyyy");
  for (let i = 0; i < allToDo.length; i++) {
    const date = format(parseISO(allToDo[i].getDueDate()), "MM/dd/yyyy");
    if (date === formatted) {
      const holder = document.querySelector(".task-holder");

      const eachToDoHolder = document.createElement("div");
      eachToDoHolder.classList.add("to-do");
      eachToDoHolder.id = i;

      holder.appendChild(eachToDoHolder);

      eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${allToDo[i].title}</p></div>
        <div class='description'><p>Description ${allToDo[i].description}</p></div>
        <div class="due"><p>Due Date: ${date}</p></div>
        <div class="priority"><p>Time Allocations: ${allToDo[i].priority}</p></div>
        <div class="notes"><p>Notes: ${allToDo[i].notes}</p></div>
        <div class="done"><p>Complete ${allToDo[i].checkStat}</p></div>
        <div class="project"><p>project: ${allToDo.project}</p></div>
        <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
    }
  }
};

const checkForCurrentWeek = () => {
  const getToday = new Date();
  const findWeek = getWeek(getToday);
  console.log(findWeek);
  for (let i = 0; i < allToDo.length; i++) {
    const taskWeek = getWeek(parseISO(allToDo[i].getDueDate()));
    console.log(taskWeek);
    if (taskWeek === findWeek) {
      const holder = document.querySelector(".task-holder");

      const eachToDoHolder = document.createElement("div");
      eachToDoHolder.classList.add("to-do");
      eachToDoHolder.id = i;

      holder.appendChild(eachToDoHolder);

      eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${allToDo[i].title}</p></div>
        <div class='description'><p>Description ${allToDo[i].description}</p></div>
        <div class="due"><p>Due Date: ${allToDo[i].dueDate}</p></div>
        <div class="priority"><p>Time Allocations: ${allToDo[i].priority}</p></div>
        <div class="notes"><p>Notes: ${allToDo[i].notes}</p></div>
        <div class="done"><p>Complete ${allToDo[i].checkStat}</p></div>
        <div class="project"><p>project: ${allToDo.project}</p></div>
        <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
    }
  }
};

const sortAndDisplayTasks = (project) => {
  projectSort();
  clearToDoDisplay();
  loopThroughTasks(project);
  updateDeletes();
};

export {
  sortAndDisplayTasks,
  checkDatesOfTasks,
  clearToDoDisplay,
  updateDeletes,
  checkForCurrentWeek,
};
