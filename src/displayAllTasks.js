/* eslint-disable no-plusplus */
import { deleteTask, allToDo } from "./toDo";

const clearToDo = () => {
  const holder = document.querySelector(".task-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const updateDelete = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteTask(event.target.parentNode.id);
      // Sorry for this error, hard to avoid.
      // eslint-disable-next-line no-use-before-define
      displayAllTasks();
    });
  });
};

const displayAllTasks = () => {
  clearToDo();
  const holder = document.querySelector(".task-holder");
  for (let i = 0; i < allToDo.length; i++) {
    const eachToDoHolder = document.createElement("div");
    eachToDoHolder.classList.add("to-do");
    eachToDoHolder.id = i;

    holder.appendChild(eachToDoHolder);

    eachToDoHolder.innerHTML += ` <div class='title'><p>Title: ${allToDo[i].title}</p></div>
      <div class='description'><p>Description ${allToDo[i].description}</p></div>
      <div class="due"><p>Due Date: ${allToDo[i].dueDate}</p></div>
      <div class="priority"><p>Time Allocations: ${allToDo[i].priority}</p></div>
      <div class="notes"><p>Notes: ${allToDo[i].notes}</p></div>
      <div class="done"><p>Complete ${allToDo[i].checkStat}</p></div>
      <div class="project"><p>project: ${allToDo[i].project}</p></div>
      <div class="delete"><button class=delete-btn id=${i}>X</button></div>`;
  }
  updateDelete();
};

export default displayAllTasks;
