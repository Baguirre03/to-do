/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
import { allProjects } from "./project";
import {
  checkDatesOfTasks,
  checkForCurrentWeek,
  clearToDoDisplay,
  sortAndDisplayTasks,
} from "./displayAllTasks";
import projectSort from "./projectAssign";

let currentProject = "0";

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const displayProjects = () => {
  const projectHolder = document.querySelector(".projects-holder");
  for (let i = 0; i < allProjects.length; i++) {
    const project = document.createElement("button");
    project.textContent = allProjects[i].name;
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    project.addEventListener("click", () => {
      currentProject = project.id;
      sortAndDisplayTasks(project.id);
    });
  }
};

const navBarEvents = () => {
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");

  today.addEventListener("click", () => {
    currentProject = "today";
    console.log(currentProject);
    projectSort();
    clearToDoDisplay();
    checkDatesOfTasks();
  });

  week.addEventListener("click", () => {
    currentProject = "week";
    projectSort();
    clearToDoDisplay();
    checkForCurrentWeek();
  });
};

const clearAndDisplayProjects = () => {
  clearProjects();
  displayProjects();
};

export { clearAndDisplayProjects, currentProject, navBarEvents };
