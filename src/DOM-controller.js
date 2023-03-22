/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";

const clearToDo = () => {
  const holder = document.querySelector(".task-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const displayToDos = () => {
  clearToDo();
  const holder = document.querySelector(".task-holder");
  for (let i = 0; i < allToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");

    holder.appendChild(eachToDoHolder);

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${allToDo[i].title}</p></div>
    <div class='description'><p>Description ${allToDo[i].description}</p></div>
    <div class="due"><p>Due Date: ${allToDo[i].dueDate}</p></div>
    <div class="priority"><p>Time Allocations: ${allToDo[i].priority}</p></div>
    <div class="notes"><p>Notes: ${allToDo[i].notes}</p></div>
    <div class="done"><p>Complete ${allToDo[i].checkStat}</p></div>
    <div class="project"><p>project: ${allToDo[i].project}</p></div>
    <div class="delete"><button>X</button></div>`;
  }

  // Point left off
  const deleteButton = document.querySelectorAll(".delete");
  console.log(deleteButton);
};

export default displayToDos;
