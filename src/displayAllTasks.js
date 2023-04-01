/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import format from "date-fns/format";
import { getWeek, parseISO } from "date-fns";
import { allProjects, deleteProject } from "./project";
import { deleteTask, allToDo } from "./toDo";
import projectSort from "./projectAssign";
import { addProjectsToStore, addTasksToStorage } from "./storage";
import {
  addProjectTitleToDOM,
  clearAndDisplayProjects,
  currentProject,
  highlightAllTaskOnDOM,
  selectedProj,
} from "./displayProjects";
// import editImage from "./imgs/edit.svg";
// import deleteImage from "./imgs/delete.svg";
// import infoImage from "./imgs/info.svg";

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
      deleteTask(event.currentTarget.id);
      addTasksToStorage();
      sortAndDisplayTasks(currentProject);
    });
  });

  const getInfoButtons = document.querySelectorAll(".info-btn");
  getInfoButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      displayInfoPopUp(allToDo[event.currentTarget.id]);
    });
  });
};

const displayInfoPopUp = (task) => {
  const parent = document.querySelector("body");
  const holder = document.createElement("div");
  holder.textContent = task.getInfo();
  holder.classList.add("task-info-popup");

  const removeElement = document.createElement("button");
  removeElement.classList.add("remove-popup");
  removeElement.textContent = "X";

  holder.appendChild(removeElement);
  parent.appendChild(holder);

  removeElement.addEventListener("click", () => {
    holder.remove();
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

  eachToDoHolder.innerHTML += ` <div class="left-task-tems">
  <div class='title'><p>${indexDisplay.title}</p></div>
  <div class="due"><p>Due: ${date}</p></div>
  </div>
  <div class="right-task-items">
  <div class="priority"><p>Priority: ${indexDisplay.priority}</p></div>
  <div class="done"><p>Complete ${indexDisplay.checkStat}</p></div>
  <div class="edit"><button class=edit-task id=${indexOfTask}><svg class="edit-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg></button></div>
  <div class="get-information"><button class=info-btn id=${indexOfTask}><svg class="info-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M13 9V7H11V9H13M13 17V11H11V17H13Z" /></svg></button></div>
  <div class="delete"><button class=delete-btn id=${indexOfTask}><svg class="delete-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg></button></div>
  </div>`;
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
    highlightAllTaskOnDOM();
    addProjectsToStore();
    clearAndDisplayProjects();
    sortAndDisplayTasks(currentProject);
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
