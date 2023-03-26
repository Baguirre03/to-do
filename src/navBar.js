/* eslint-disable no-plusplus */
import {
  checkDatesOfTasks,
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
    // tasks per week functions
  });
};

export default navBarEvents;
