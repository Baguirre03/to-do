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

const disiplayOnDOM = (indexDisplay, i) => {
  const holder = document.querySelector(".task-holder");

  const eachToDoHolder = document.createElement("div");
  eachToDoHolder.classList.add("to-do");
  eachToDoHolder.id = i;

  holder.appendChild(eachToDoHolder);

  const indexOfTask = allToDo.indexOf(indexDisplay);

  const date = format(parseISO(indexDisplay.dueDate), "MM/dd/yyyy");

  // eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${indexDisplay.title}</p></div>
  // <div class='description'><p>Description ${indexDisplay.description}</p></div>
  // <div class="due"><p>Due Date: ${date}</p></div>
  // <div class="priority"><p>Time Allocations: ${indexDisplay.priority}</p></div>
  // <div class="notes"><p>Notes: ${indexDisplay.notes}</p></div>
  // <div class="done"><p>Complete ${indexDisplay.checkStat}</p></div>
  // <div class="project"><p>project: ${indexDisplay.project}</p></div>
  // <div class="delete"><button class=delete-btn id=${indexOfTask}>X</button></div>`;

  eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${indexDisplay.title}</p></div>
  <div class="due"><p>Due Date: ${date}</p></div>
  <div class="priority"><p>Time Allocations: ${indexDisplay.priority}</p></div>
  <div class="done"><p>Complete ${indexDisplay.checkStat}</p></div>
  <div class="delete"><button class=delete-btn id=${indexOfTask}>X</button></div>
  <div class="get-information"><button class=info-btn id=${indexOfTask}>Get Info</button></div>`;
};

const loopThroughTasks = (index) => {
  const display = allProjects[index];
  for (let i = 0; i < display.projectToDo.length; i++) {
    disiplayOnDOM(display.projectToDo[i], i);
  }
  updateDeletes();
  if (display.getProjects().length === 0) {
    const displayEmpty = document.querySelector(".task-holder");
    displayEmpty.textContent = `${display.getName()} has no tasks! Go add some!`;
  }
};

const checkDatesOfTasks = () => {
  const getToday = new Date();
  const formatted = format(getToday, "MM/dd/yyyy");
  for (let i = 0; i < allToDo.length; i++) {
    const date = format(parseISO(allToDo[i].getDueDate()), "MM/dd/yyyy");
    if (date === formatted) {
      disiplayOnDOM(allToDo[i], i);
    }
  }
  updateDeletes();
  checkEmptyDiv();
};

const checkForCurrentWeek = () => {
  const getToday = new Date();
  const findWeek = getWeek(getToday);
  for (let i = 0; i < allToDo.length; i++) {
    const taskWeek = getWeek(parseISO(allToDo[i].getDueDate()));
    if (taskWeek === findWeek) {
      disiplayOnDOM(allToDo[i], i);
    }
  }
  updateDeletes();
  checkEmptyDiv();
};

const checkEmptyDiv = () => {
  const displayHolder = document.querySelector(".task-holder");
  if (displayHolder.childElementCount === 0) {
    displayHolder.textContent = "No tasks due soon, congrats!";
  }
};

const sortAndDisplayTasks = (project) => {
  projectSort();
  clearToDoDisplay();
  loopThroughTasks(project);
};

export {
  sortAndDisplayTasks,
  checkDatesOfTasks,
  clearToDoDisplay,
  checkForCurrentWeek,
};
