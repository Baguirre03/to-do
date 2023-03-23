import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { allProjects } from "./project";
import { allToDo } from "./toDo";

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
    for (let i = 0; i < allProjects[0].projectToDo.length; i++) {
      const date = format(parseISO(allToDo[i].dueDate), "MM/dd/yyyy");
      if (formatted === date) {
        console.log(formatted, date);
      }
    }
  });

  week.addEventListener("click", () => {
    // tasks per week functions
  });
};

export default navBarEvents;
