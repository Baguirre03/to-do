/* eslint-disable no-plusplus */
import {
  checkDatesOfTasks,
  checkForCurrentWeek,
  clearToDoDisplay,
} from "./displayAllTasks";
import { currentProject } from "./displayProjects";
import projectSort from "./projectAssign";

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
    projectSort();
    clearToDoDisplay();
    checkForCurrentWeek();
  });
};

export default navBarEvents;
