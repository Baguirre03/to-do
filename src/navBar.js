/* eslint-disable no-plusplus */
import format from "date-fns/format";
import { sortAndDisplayTasks } from "./displayAllTasks";

const navBarEvents = () => {
  const mainInbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");

  mainInbox.addEventListener("click", () => {
    sortAndDisplayTasks("0");
  });

  today.addEventListener("click", () => {
    const getToday = new Date();
    const formatted = format(getToday, "MM/dd/yyyy");
    sortAndDisplayTasks(formatted);
  });

  week.addEventListener("click", () => {
    // tasks per week functions
  });
};

export default navBarEvents;
