/* eslint-disable no-plusplus */
import {
  checkDatesOfTasks,
  checkForCurrentWeek,
  clearToDoDisplay,
  sortAndDisplayTasks,
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
  });

  week.addEventListener("click", () => {
    projectSort();
    clearToDoDisplay();
    checkForCurrentWeek();
  });
};

export default navBarEvents;
