/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import format from "date-fns/format";
import { getWeek, parseISO } from "date-fns";
import { allProjects, deleteProject } from "./project";
import { deleteTask, allToDo } from "./toDo";
import projectSort from "./projectAssign";
import { addTasksToStorage } from "./storage";
import {
  addProjectTitleToDOM,
  clearAndDisplayProjects,
  currentProject,
  selectedProj,
} from "./displayProjects";

const clearToDoDisplay = () => {
  const holder = document.querySelector(".task-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const getEventListeners = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteTask(event.target.id);
      addTasksToStorage();
      sortAndDisplayTasks(currentProject);
    });
  });

  const getInfoButtons = document.querySelectorAll(".info-btn");
  getInfoButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const task = allToDo[event.target.id];
      console.log(task.getInfo());
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

  eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${indexDisplay.title}</p></div>
  <div class="due"><p>Due Date: ${date}</p></div>
  <div class="priority"><p>Priority: ${indexDisplay.priority}</p></div>
  <div class="done"><p>Complete ${indexDisplay.checkStat}</p></div>
  <div class="edit"><button class=edit-task id=${indexOfTask}>Edit Task</button></div>
  <div class="delete"><button class=delete-btn id=${indexOfTask}>X</button></div>
  <div class="get-information"><button class=info-btn id=${indexOfTask}>Get Info</button></div>`;
};

const createEmptyDisplay = () => {
  const project = allProjects[currentProject];

  const parent = document.querySelector(".task-holder");
  const emptyDisplay = document.createElement("h2");
  emptyDisplay.classList.add("empty-display");
  emptyDisplay.textContent = `${project.getName()} has no tasks, go add some!`;
  parent.appendChild(emptyDisplay);

  if (currentProject === "0") {
    emptyDisplay.textContent = "No tasks at all? Lets get this going";
    return;
  }

  const deleteBtn = document.createElement("button");
  parent.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete Project";
  deleteBtn.classList.add("delete-proj");
  deleteBtn.addEventListener("click", () => {
    deleteProject(currentProject);
    clearAndDisplayProjects();
    sortAndDisplayTasks("0");
  });
};

const loopThroughTasks = (index) => {
  const display = allProjects[index];
  for (let i = 0; i < display.projectToDo.length; i++) {
    disiplayOnDOM(display.projectToDo[i], i);
  }
  if (display.getProjects().length === 0) {
    createEmptyDisplay();
  }
  getEventListeners();
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
  getEventListeners();
  checkEmptyDivForNav("No tasks due today, nice job!");
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
  getEventListeners();
  checkEmptyDivForNav("No tasks due this week, enjoy it!");
};

const checkEmptyDivForNav = (text) => {
  const displayHolder = document.querySelector(".task-holder");
  if (displayHolder.childElementCount === 0) {
    const emptyDisplay = document.createElement("h2");
    emptyDisplay.classList.add("empty-display");
    emptyDisplay.textContent = text;
    displayHolder.appendChild(emptyDisplay);
  }
};

const sortAndDisplayTasks = (project) => {
  switch (project) {
    case "today":
      projectSort();
      clearToDoDisplay();
      checkDatesOfTasks();
      selectedProj();
      addProjectTitleToDOM();
      break;
    case "week":
      projectSort();
      clearToDoDisplay();
      checkForCurrentWeek();
      selectedProj();
      addProjectTitleToDOM();
      break;
    default:
      projectSort();
      clearToDoDisplay();
      loopThroughTasks(project);
      selectedProj();
      addProjectTitleToDOM();
  }
};

export {
  sortAndDisplayTasks,
  checkDatesOfTasks,
  clearToDoDisplay,
  checkForCurrentWeek,
};
