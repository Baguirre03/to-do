/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
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

  // form.appendChild(label);
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
    sortAndDisplayTasks(allProjects.length - 1);
    addProjectTitleToDOM();

    form.remove();
    newProject.disabled = false;
  });
};

const createToDoForm = () => {
  const container = document.querySelector(".main-container");
  container.classList.add("blur-this");
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
  for (let i = 2; i <= 6; i++) {
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
  submit.textContent = "+";

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
    submit
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
    container.classList.remove("blur-this");
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
};

export { eventListeners, createToDoForm, createProjectForm };
