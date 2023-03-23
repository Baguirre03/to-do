import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { clearToDoDisplay, displayTasks } from "./displayAllTasks";
import { allProjects } from "./project";
import { allToDo } from "./toDo";

const navBarEvents = () => {
  const mainInbox = document.querySelector("#inbox");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");

  mainInbox.addEventListener("click", () => {
    displayTasks("0");
  });

  today.addEventListener("click", () => {
    const getToday = new Date();
    const formatted = format(getToday, "MM/dd/yyyy");
    for (let i = 0; i < allProjects[0].projectToDo.length; i++) {
      const date = format(parseISO(allToDo[i].dueDate), "MM/dd/yyyy");
      console.log(formatted, date);
      if (formatted === date) {
        clearToDoDisplay();
        const holder = document.querySelector(".task-holder");
        const eachToDoHolder = document.createElement("div");
        eachToDoHolder.classList.add("to-do");
        eachToDoHolder.id = i;

        holder.appendChild(eachToDoHolder);

        eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${allToDo[i].title}</p></div>
          <div class='description'><p>Description ${allToDo[i].description}</p></div>
          <div class="due"><p>Due Date: ${date}</p></div>
          <div class="priority"><p>Time Allocations: ${allToDo[i].priority}</p></div>
          <div class="notes"><p>Notes: ${allToDo[i].notes}</p></div>
          <div class="done"><p>Complete ${allToDo[i].checkStat}</p></div>
          <div class="project"><p>project: ${allToDo[i].project}</p></div>
          <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
      }
    }
  });

  week.addEventListener("click", () => {
    // tasks per week functions
  });
};

export default navBarEvents;
