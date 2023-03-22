/* eslint-disable no-plusplus */
import { createNewProject } from "./project";
import projectSort from "./projectAssign";
import { allToDo, createNewToDo, deleteTask } from "./toDo";

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
      // SORRY
      // eslint-disable-next-line no-use-before-define
      displayTasks();
    });
  });
};

const displayTasks = () => {
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

const createProjectForm = () => {
  const parent = document.querySelector("main");
  const form = document.createElement("form");
  form.classList.add("project-form");

  parent.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "project-name");
  label.textContent = "Project Name: ";

  const input = document.createElement("input");
  input.setAttribute("id", "project-name");

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submit);

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    createNewProject(input.value);
    projectSort();
    displayTasks();
  });
};

const createToDoForm = () => {
  const parent = document.querySelector("main");
  const form = document.createElement("form");
  form.classList.add("to-do-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("input");
  descInput.setAttribute("id", "description");

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");

  const priorityLable = document.createElement("label");
  priorityLable.setAttribute("for", "priority");
  priorityLable.textContent = "Priority: ";

  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("id", "priority");

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("input");
  timeInput.setAttribute("id", "description");

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("input");
  noteInput.setAttribute("id", "notes");

  const doneLabel = document.createElement("label");
  doneLabel.setAttribute("for", "done");
  doneLabel.textContent = "Complete? ";

  const doneInput = document.createElement("input");
  doneInput.setAttribute("id", "done");
  doneInput.setAttribute("type", "checkbox");

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project : ";

  const projectInput = document.createElement("input");
  projectInput.setAttribute("id", "project");

  const submit = document.createElement("button");
  submit.textContent = "+";
  console.log("creating");

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    priorityLable,
    priorityInput,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    doneLabel,
    doneInput,
    projectLabel,
    projectInput,
    submit
  );

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    createNewToDo(
      nameInput.value,
      descInput.value,
      dueDate.value,
      priorityInput.value,
      timeInput.value,
      noteInput.value,
      doneInput.value,
      projectInput.value
    );
    projectSort();
    displayTasks();
    form.remove();
  });
};

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", createProjectForm);

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", createToDoForm);
};

export {
  displayTasks,
  createToDoForm,
  createProjectForm,
  eventListeners,
  updateDelete,
};