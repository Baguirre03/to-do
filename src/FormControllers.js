/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
import { allProjects, createNewProject } from "./project";
import projectSort from "./projectAssign";
import { createNewToDo } from "./toDo";
import {
  addProjectTitleToDOM,
  changeCurrentProject,
  clearAndDisplayProjects,
  currentProject,
} from "./displayProjects";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { addProjectsToStore, addTasksToStorage } from "./storage";

const toggleBackgroundBlur = () => {
  const container = document.querySelector(".main-container");
  container.classList.contains("blur-this")
    ? container.classList.remove("blur-this")
    : container.classList.add("blur-this");
};

const valiDate = (inputDate) => {
  const parts = inputDate.split(/[/\-.]/);

  if (parts.length < 3) {
    return false;
  }
  const dt = new Date(parts[2], parts[1] - 1, parts[0]);
  return dt && dt.getMonth() === parseInt(parts[1], 10) - 1;
};

const createProjectForm = () => {
  const parent = document.querySelector(".projects-holder");
  const form = document.createElement("form");
  const newProject = document.querySelector("#createProj");

  form.classList.add("project-form");

  parent.appendChild(form);

  const input = document.createElement("input");
  input.setAttribute("id", "project-name");

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.appendChild(input);
  form.appendChild(submit);

  input.focus();

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value === "") {
      // eslint-disable-next-line no-alert
      alert("Give your project a name");
      return;
    }

    createNewProject(input.value);
    addProjectsToStore();
    projectSort();
    clearAndDisplayProjects();
    changeCurrentProject(allProjects.length - 1);
    sortAndDisplayTasks(currentProject);
    addProjectTitleToDOM();

    form.remove();
    newProject.disabled = false;
  });
};

const createToDoForm = () => {
  toggleBackgroundBlur();

  const newToDo = document.querySelector("#createToDo");
  const parent = document.querySelector("body");
  const form = document.createElement("form");
  form.classList.add("to-do-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do * : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");
  nameInput.setAttribute("placeholder", "Task");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("textarea");
  descInput.setAttribute("id", "description");
  descInput.setAttribute("placeholder", "Description");

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date * : ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");

  const priorityLable = document.createElement("legend");
  priorityLable.setAttribute("for", "priority");
  priorityLable.textContent = "Priority * : ";

  const priorityHolder = document.createElement("div");
  priorityHolder.id = "priority";

  priorityHolder.innerHTML += `<div class="input-and-label">
    <input class="radio" value="one" type="radio" id="one" name="priority"></input>
    <label for="one">One</label>
  </div>
  <div class="input-and-label">
    <input class="radio" value="two" type="radio" id="two" name="priority"></input>
    <label for="two">Two</label>
  </div>
  <div class="input-and-label">
      <input class="radio" value="three" type="radio" id="three" name="priority"></input>
      <label for="three">Three</label>
  </div>`;

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("select");
  const oneHour = document.createElement("option");
  oneHour.textContent = "1 hour";
  oneHour.value = "1 hour";
  timeInput.appendChild(oneHour);
  for (let i = 2; i <= 6; i += 1) {
    const option = document.createElement("option");
    option.value = `${i} hours`;
    option.textContent = `${i} hours`;
    timeInput.appendChild(option);
  }
  timeInput.setAttribute("id", "description");

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("textarea");
  noteInput.setAttribute("id", "notes");
  noteInput.setAttribute("placeholder", "Notes");

  const doneLabel = document.createElement("label");
  doneLabel.setAttribute("for", "done");
  doneLabel.textContent = "Complete? ";

  const doneInput = document.createElement("input");
  doneInput.setAttribute("id", "done");
  doneInput.setAttribute("type", "checkbox");

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project: ";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");

  const currentProjectName = allProjects[currentProject].getName();

  allProjects.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.name;
    option.textContent = element.name;
    projectInput.appendChild(option);
    if (option.value === currentProjectName) {
      option.setAttribute("selected", "selected");
    }
  });

  const submit = document.createElement("button");
  submit.textContent = "Add Task";
  submit.classList.add("submit-form");

  const removeFormButton = document.createElement("button");
  removeFormButton.textContent = "X";
  removeFormButton.classList.add("remove-form");
  removeFormButton.addEventListener("click", () => {
    form.remove();
    toggleBackgroundBlur();
    newToDo.disabled = false;
  });

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    priorityLable,
    priorityHolder,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    doneLabel,
    doneInput,
    projectLabel,
    projectInput,
    submit,
    removeFormButton
  );

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    valiDate(dueDateInput.value);
    if (!dueDateInput.value) {
      // eslint-disable-next-line no-alert
      alert("please put a valid date");
      return;
    }
    const radio = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    createNewToDo(
      nameInput.value,
      descInput.value,
      dueDateInput.value,
      radio,
      timeInput.value,
      noteInput.value,
      doneInput.checked,
      projectInput.value
    );
    addTasksToStorage();
    projectSort();
    sortAndDisplayTasks(currentProject);
    toggleBackgroundBlur();
    form.remove();
    newToDo.disabled = false;
  });
};

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", () => {
    newProject.disabled = true;
    createProjectForm();
  });

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", () => {
    newToDo.disabled = true;
    createToDoForm();
  });

  const logo = document.querySelector("#logo-svg");
  logo.addEventListener("click", () => {
    document.querySelector("#all").click();
  });

  const dropDown = document.querySelector(".dropdown");
  dropDown.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("active-dropdown")) {
      sidebar.classList.remove("active-dropdown");
      dropDown.classList.remove("is-open");
      // dropDown.innerHTML = `<svg id="dropdown-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>`;
    } else {
      sidebar.classList.add("active-dropdown");
      dropDown.classList.add("is-open");
      // dropDown.innerHTML = `<svg id="dropdown-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-box-outline</title><path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" /></svg>`;
    }
  });
};

export {
  eventListeners,
  createToDoForm,
  createProjectForm,
  toggleBackgroundBlur,
};
