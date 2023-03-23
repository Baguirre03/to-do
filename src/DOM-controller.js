import displayAllTasks from "./displayAllTasks";

const navBarEvents = () => {
  const mainInbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");

  mainInbox.addEventListener("click", () => {
    displayAllTasks();
  });

  today.addEventListener("click", () => {
    // tasks for today
  });

  week.addEventListener("click", () => {
    // tasks per week functions
  });
};

export default navBarEvents;
