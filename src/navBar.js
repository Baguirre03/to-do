/* eslint-disable no-plusplus */
import {
  checkDatesOfTasks,
  checkForCurrentWeek,
  clearToDoDisplay,
  sortAndDisplayTasks,
  updateDeletes,
} from "./displayAllTasks";
import projectSort from "./projectAssign";

const navBarEvents = () => {
  const mainInbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");

  mainInbox.addEventListener("click", () => {
    sortAndDisplayTasks("0");
  });

  today.addEventListener("click", () => {
    projectSort();
    clearToDoDisplay();
    checkDatesOfTasks();
    updateDeletes();
  });

  week.addEventListener("click", () => {
    projectSort();
    clearToDoDisplay();
    checkForCurrentWeek();
    updateDeletes();
  });
};

export default navBarEvents;
